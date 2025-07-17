import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  const lockAddress = "0x95A06Ff0e9930d1a121e8805d440313FCb8052ee";

  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.attach(lockAddress);

  const tx = await lock.withdraw();
  await tx.wait();

  console.log("Withdraw successful!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
