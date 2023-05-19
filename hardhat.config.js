require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
module.exports = {
  // defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // blockGasLimit: 100000000429720, // whatever you want here
      allowUnlimitedContractSize: true,
      forking: {
        enabled: true,
        url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
        // blockNumber: 17291493,
      },
    },
  },
  solidity: {
    version: "0.8.13",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
