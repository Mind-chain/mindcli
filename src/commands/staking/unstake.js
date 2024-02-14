// unstakeMind.js

const { ethers } = require('ethers')
const { stakingABI } = require('./../../abi/stakingABI')
const { urls, contracts } = require('./../../config/index')

async function unstakeMind(privateKey) {
  try {
    console.log('Connecting to MIND network...')

    const provider = new ethers.providers.JsonRpcProvider(
      urls.testnet_rpc.http_rpc,
    )
    const wallet = new ethers.Wallet(privateKey, provider)

    console.log('Connected to MIND network successfully.')

    // Load the contract
    const contract = new ethers.Contract(
      contracts.contracts.staking,
      stakingABI,
      wallet,
    )

    console.log('Contract loaded successfully.')

    console.log('Initiating unstake process...')

    // Execute the unstake function
    const tx = await contract.unstake()

    console.log('Unstake request sent. Waiting for confirmation...')

    // Wait for the transaction to be confirmed
    await tx.wait()

    console.log('Unstake successful!')
    console.log('Transaction hash:', tx.hash)
  } catch (error) {
    console.error('Error occurred while unstaking MIND:', error)
  }
}

module.exports = { unstakeMind }
