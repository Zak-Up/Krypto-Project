//https://eth-mainnet.alchemyapi.io/v2/WizTh1bmZ8We6x7UK52pD7qHkR_bOTf5

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-mainnet.alchemyapi.io/v2/WizTh1bmZ8We6x7UK52pD7qHkR_bOTf5',
      accounts: [ '4f1178c80a1aebbeeaf3277b8d4a05e60dad0206b5307aa495e898ff46df2697' ]
    }
  }
}
