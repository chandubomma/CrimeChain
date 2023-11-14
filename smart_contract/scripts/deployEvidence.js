// scripts/deployEvidence.js

const { ethers } = require('hardhat');

async function main() {
  // Get the contract factories
  const EvidenceContract = await ethers.getContractFactory('EvidenceNFT');

  // Deploy the contracts
  const evidenceContract = await EvidenceContract.deploy();

  // Wait for the deployment to be confirmed
  await evidenceContract.deployed();

  console.log('EvidenceContract deployed to:', evidenceContract.address);
}

// Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
