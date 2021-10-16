const hreTest = require("hardhat");

const mainTest = async () => {
  const nftContractFactory = await hreTest.ethers.getContractFactory("BeegNFT");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  // Call the function.
  console.log("Minting first...");

  let txn = await nftContract.makeAnEpicNFT();
  // Wait for it to be mined.
  await txn.wait();
  console.log("Minted first!!");

  console.log("Minting second...");
  // Mint another NFT for fun.
  txn = await nftContract.makeAnEpicNFT();
  // Wait for it to be mined.
  await txn.wait();
  // Minted
  console.log("Minted last one!!!");
};

const runMainTest = async () => {
  try {
    await mainTest();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
