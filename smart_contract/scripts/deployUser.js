// scripts/deployUser.js

const { ethers } = require('hardhat');

async function main() {
  // Get the contract factories
  const UserContract = await ethers.getContractFactory('UserContract');

  // Deploy the contracts
  const userContract = await UserContract.deploy();

  // Wait for the deployment to be confirmed
  await userContract.deployed();

  console.log('UserContract deployed to:', userContract.address);
}

// Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
