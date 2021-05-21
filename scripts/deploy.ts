import { ethers, waffle } from "hardhat";
import fs from "fs";

const NETWORK_MAP = {
  "1": "mainnet",
  "4": "rinkeby",
  "1337": "hardhat",
  "31337": "hardhat",
};

let isLocal = false;

async function main() {
  const chainId = (await waffle.provider.getNetwork()).chainId;

  console.log({ chainId });
  const networkName = NETWORK_MAP[chainId];

  console.log(`Deploying to ${networkName}`);

  const Logic = await ethers.getContractFactory("CrowdfundLogic");
  const logic = await Logic.deploy();
  await logic.deployed();

  const Factory = await ethers.getContractFactory("CrowdfundFactory");
  const factory = await Factory.deploy(logic.address);
  await factory.deployed();

  const info = {
    Contracts: {
      logic: logic.address,
      factory: factory.address,
    },
  };

  console.log(info);

  if (!isLocal) {
    fs.writeFileSync(
      `${__dirname}/../networks/${networkName}.json`,
      JSON.stringify(info, null, 2)
    );
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
