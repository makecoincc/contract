require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const infuraKey = process.env.infuraKey;
const privateKey1 = process.env.privateKey1;
const alchemyKey = process.env.alchemyKey;

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${infuraKey}`,
      accounts: [privateKey1],
      chainId: 11155111,
    },
     baseSepolia: {
      url: `https://base-sepolia.g.alchemy.com/v2/${alchemyKey}`,
      accounts: [privateKey1],
      chainId: 84532,
    },
  },
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}