require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.20", // This should match the version used by OpenZeppelin Contracts
      },
      {
        version: "0.8.0", // This should match the version used by OpenZeppelin Contracts
      },
      // Add more compilers as needed for your contracts and dependencies
    ],
  },
  
  networks: {
    localhost: {
      url : 'http://127.0.0.1:8545/'
    },
    sepolia: {
      url: 'Replace here with your network url',
      accounts: ['replace with your account private url'],
    },
  },
};