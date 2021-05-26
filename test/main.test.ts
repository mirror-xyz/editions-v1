import { expect } from "chai";
import { ethers, waffle } from "hardhat";
import { BigNumber } from "ethers";

import scenarios from "./scenarios.json";

const name = "Mirror Editions";
const symbol = "EDITIONS";

const { provider } = waffle;

const baseURI = "https://mirror-api.com/";
const deployEditions = async () => {
  const Editions = await ethers.getContractFactory("Editions");
  const editions = await Editions.deploy(baseURI);
  return await editions.deployed();
};

describe("Editions", () => {
  describe("editions deployment", () => {
    let minter, purchaser, receiver, fundingRecipient, editionsContract;

    beforeEach(async () => {
      [
        minter,
        purchaser,
        receiver,
        fundingRecipient,
      ] = await ethers.getSigners();

      editionsContract = await deployEditions();
    });

    it("deploys editions with basic attributes", async () => {
      expect(await editionsContract.name()).to.eq(name);
      expect(await editionsContract.symbol()).to.eq(symbol);
    });

    for (let x = 0; x < scenarios.length; x++) {
      const { quantity, price, editionId, buyEdition } = scenarios[x];

      describe("create edition", () => {
        describe(`when ${quantity} are sold for ${price}`, async () => {
          let gasUsedForEdition;
          let editionEvent;

          beforeEach(async () => {
            let createEditionTx;

            createEditionTx = await editionsContract.createEdition(
              BigNumber.from(quantity), // quantity
              BigNumber.from(price), // price,
              fundingRecipient.address // fundingRecipient
            );

            const editionReceipt = await createEditionTx.wait();

            gasUsedForEdition = editionReceipt.gasUsed;

            editionEvent = editionsContract.interface.parseLog(
              editionReceipt.events[0]
            );
          });

          it("creates an event log for the edition being created", async () => {
            const eventData = editionEvent.args;
            expect(eventData.quantity.toString()).to.eq(quantity);
            expect(eventData.price.toString()).to.eq(price);
            expect(eventData.editionId.toString()).to.eq(editionId);
            expect(eventData.fundingRecipient.toString()).to.eq(
              fundingRecipient.address
            );
          });

          it("creates an edition in the editions contract", async () => {
            const firstEdition = await editionsContract.editions(
              BigNumber.from(editionId)
            );

            expect(firstEdition.quantity.toString()).to.eq(quantity);
            expect(firstEdition.price.toString()).to.eq(price);
            expect(firstEdition.fundingRecipient.toString()).to.eq(
              fundingRecipient.address
            );
            expect(firstEdition.numSold.toString()).to.eq("0");
          });

          // it("uses 93421 gas to create edition", async () => {
          //   expect(gasUsedForEdition.toString()).to.eq("93421");
          // });

          describe("check ERC721 functions before minting", () => {
            describe("ownerOf", () => {
              it("reverts", async () => {
                const tx = editionsContract.ownerOf(BigNumber.from(0));

                await expect(tx).to.be.revertedWith(
                  "ERC721: owner query for nonexistent token"
                );
              });

              describe("tokenURI", () => {
                it("reverts", async () => {
                  const tx = editionsContract.tokenURI(BigNumber.from(0));

                  await expect(tx).to.be.revertedWith(
                    "Token has not been sold yet"
                  );
                });
              });
            });

            describe("balanceOf", () => {
              it("returns 0", async () => {
                const result = await editionsContract.balanceOf(
                  purchaser.address
                );
                expect(result.toString()).to.eq("0");
              });
            });
          });

          describe("buyEdition", () => {
            for (let i = 0; i < buyEdition.length; i++) {
              let {
                editionId,
                tokenId,
                numSold,
                balanceOf,
                balanceAfterTransfer,
                reverts,
                revertMessage,
              } = buyEdition[i];

              const revenue = parseInt(price) * parseInt(numSold);

              let tx, receipt, purchaseEvent;

              describe(`purchase #${i + 1}`, () => {
                if (reverts) {
                  it(`reverts with ${revertMessage}`, async () => {
                    for (let l = 0; l < buyEdition[i].revertsOn; l++) {
                      editionsContract
                        .connect(purchaser)
                        .buyEdition(BigNumber.from(editionId), {
                          value: BigNumber.from(price),
                        });
                    }

                    const tx = editionsContract
                      .connect(purchaser)
                      .buyEdition(BigNumber.from(editionId), {
                        value: BigNumber.from(price),
                      });
                    await expect(tx).to.be.revertedWith(revertMessage);
                  });
                } else {
                  beforeEach(async () => {
                    for (let y = 0; y <= i; y++) {
                      tx = await editionsContract
                        .connect(purchaser)
                        .buyEdition(BigNumber.from(editionId), {
                          value: BigNumber.from(price),
                        });
                    }

                    receipt = await tx.wait();
                    purchaseEvent = editionsContract.interface.parseLog(
                      receipt.events[1]
                    );
                  });

                  it("creates an event log for the purchase", async () => {
                    const eventData = purchaseEvent.args;

                    expect(eventData.editionId.toString()).to.eq(editionId);
                    expect(eventData.tokenId.toString()).to.eq(tokenId);
                    expect(eventData.buyer.toString()).to.eq(purchaser.address);
                    expect(eventData.numSold.toString()).to.eq(numSold);
                  });

                  it(`updates the number sold for the editions to ${numSold}`, async () => {
                    const editionData = await editionsContract.editions(
                      BigNumber.from(editionId)
                    );
                    expect(editionData.numSold.toString()).to.eq(numSold);
                  });

                  it("updates the token data in the editions contract", async () => {
                    const owner = await editionsContract.ownerOf(tokenId);
                    expect(owner).to.eq(purchaser.address);
                  });

                  it("increments the balance of the contract", async () => {
                    const balance = await provider.getBalance(
                      editionsContract.address
                    );

                    expect(balance.toString()).to.eq(revenue.toString());
                  });

                  describe("withdraw()", () => {
                    it("transfers funds to the fundingRecipient", async () => {
                      const originalRecipientBalance = await provider.getBalance(
                        fundingRecipient.address
                      );

                      await editionsContract
                        .connect(purchaser)
                        .withdrawFunds(editionId);

                      const contractBalance = await provider.getBalance(
                        editionsContract.address
                      );
                      // All the funds are extracted.
                      expect(contractBalance.toString()).to.eq("0");

                      const recipientBalance = await provider.getBalance(
                        fundingRecipient.address
                      );

                      expect(recipientBalance.toString()).to.eq(
                        originalRecipientBalance.add(revenue)
                      );
                    });

                    describe("when called again immediately afterwards", () => {
                      it("transfers funds to the fundingRecipient", async () => {
                        let originalRecipientBalance = await provider.getBalance(
                          fundingRecipient.address
                        );

                        await editionsContract
                          .connect(purchaser)
                          .withdrawFunds(editionId);

                        let contractBalance = await provider.getBalance(
                          editionsContract.address
                        );
                        // All the funds are extracted.
                        expect(contractBalance.toString()).to.eq("0");

                        let recipientBalance = await provider.getBalance(
                          fundingRecipient.address
                        );

                        expect(recipientBalance.toString()).to.eq(
                          originalRecipientBalance.add(revenue)
                        );

                        // Called twice!
                        await editionsContract
                          .connect(purchaser)
                          .withdrawFunds(editionId);

                        originalRecipientBalance = await provider.getBalance(
                          fundingRecipient.address
                        );

                        contractBalance = await provider.getBalance(
                          editionsContract.address
                        );
                        // All the funds are still extracted.
                        expect(contractBalance.toString()).to.eq("0");

                        recipientBalance = await provider.getBalance(
                          fundingRecipient.address
                        );

                        expect(recipientBalance.toString()).to.eq(
                          // The balance is unchanged.
                          originalRecipientBalance
                        );
                      });
                    });
                  });

                  describe("check ERC721 functions after minting", () => {
                    describe("ownerOf", () => {
                      it("returns the purchaser", async () => {
                        const owner = await editionsContract.ownerOf(tokenId);
                        expect(owner).to.eq(purchaser.address);
                      });
                    });

                    describe("balanceOf", () => {
                      it("returns 1", async () => {
                        const result = await editionsContract.balanceOf(
                          purchaser.address
                        );
                        expect(result.toString()).to.eq(balanceOf);
                      });
                    });

                    describe("tokenURI", () => {
                      it("returns a valid URI", async () => {
                        const resp = await editionsContract.tokenURI(tokenId);

                        expect(resp).to.eq(`${baseURI}${editionId}/${tokenId}`);
                      });
                    });

                    describe("transferFrom", () => {
                      describe("when not approved", () => {
                        it("reverts", async () => {
                          const tx = editionsContract.transferFrom(
                            purchaser.address,
                            receiver.address,
                            tokenId
                          );

                          await expect(tx).to.be.revertedWith(
                            "ERC721: transfer caller is not owner nor approved"
                          );
                        });
                      });

                      describe("when approved for transfer", () => {
                        beforeEach(async () => {
                          await editionsContract
                            .connect(purchaser)
                            .approve(receiver.address, tokenId);
                        });

                        describe("getApproved", () => {
                          it("returns the receiver address", async () => {
                            const approved = await editionsContract.getApproved(
                              tokenId
                            );
                            expect(approved).to.eq(receiver.address);
                          });
                        });

                        it("transfers the token", async () => {
                          await editionsContract
                            .connect(receiver)
                            .transferFrom(
                              purchaser.address,
                              receiver.address,
                              tokenId
                            );

                          const owner = await editionsContract.ownerOf(tokenId);
                          expect(owner).to.eq(receiver.address);

                          const purchaserBalance = await editionsContract.balanceOf(
                            purchaser.address
                          );
                          expect(purchaserBalance.toString()).to.eq(
                            balanceAfterTransfer
                          );

                          const receiverBalance = await editionsContract.balanceOf(
                            receiver.address
                          );
                          expect(receiverBalance.toString()).to.eq("1");
                        });
                      });
                    });
                  });
                }
              });
            }
          });
        });
      });
    }
  });
});

async function computeAddress(
  name: string,
  symbol: string,
  proxyAddress: any,
  factory: any
) {
  const constructorArgs = ethers.utils.defaultAbiCoder.encode(
    ["string", "string"],
    [name, symbol]
  );
  const salt = ethers.utils.keccak256(constructorArgs);
  const proxyBytecode = (await ethers.getContractFactory("EditionProxy"))
    .bytecode;
  const codeHash = ethers.utils.keccak256(proxyBytecode);
  proxyAddress = await ethers.utils.getCreate2Address(
    factory.address,
    salt,
    codeHash
  );
  return proxyAddress;
}
