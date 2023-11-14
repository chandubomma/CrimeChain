// scripts/deployCrimeRecord.js

const { ethers } = require('hardhat');

async function main() {
  // Get the contract factories
  const CrimeRecordNFT = await ethers.getContractFactory('CrimeRecordNFT');

  // Deploy the contracts
  const crimeRecordNFT = await CrimeRecordNFT.deploy();

  // Wait for the deployment to be confirmed
  await crimeRecordNFT.deployed();

  console.log('CrimeRecordNFT deployed to:', crimeRecordNFT.address);
}

// Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
