import { ethers, waffle } from "hardhat";
import fs from "fs";

const NETWORK_MAP = {
  "1": "mainnet",
  "4": "rinkeby",
  "1337": "hardhat",
  "31337": "hardhat",
};

let isLocal = false;

const baseURI = {
  hardhat: "https://staging.mirror-api.com/",
  rinkeby: "https://staging.mirror-api.com/editions/",
  mainnet: "https://mirror-api.com/editions/",
};

async function main() {
  const chainId = (await waffle.provider.getNetwork()).chainId;

  console.log({ chainId });
  const networkName = NETWORK_MAP[chainId];

  console.log(`Deploying to ${networkName}`);
  console.log({ baseURI: baseURI[networkName] });

  const Editions = await ethers.getContractFactory("Editions");
  const editions = await Editions.deploy(baseURI[networkName]);
  await editions.deployed();

  const info = {
    Contracts: {
      editions: editions.address,
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
