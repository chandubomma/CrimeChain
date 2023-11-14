// scripts/deployIdentity.js

const { ethers } = require('hardhat');

async function main() {
  // Get the contract factories
  const IdentityContract = await ethers.getContractFactory('IdentityContract');

  // Deploy the contracts
  const identityContract = await IdentityContract.deploy();

  // Wait for the deployment to be confirmed
  await identityContract.deployed();

  console.log('IdentityContract deployed to:', identityContract.address);
}

// Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
