const { ethers } = require('ethers')
const { stakingABI } = require('./../../abi/stakingABI')
const { urls, contracts } = require('./../../config/index')

async function stakemind(privateKey) {
  try {
    console.log('Connecting to MIND network...')

    const provider = new ethers.providers.JsonRpcProvider(urls.mainnet_rpc.http_rpc)
    const wallet = new ethers.Wallet(privateKey, provider)

    console.log('Connected to MIND network successfully.')

    // Load the contract
    const contract = new ethers.Contract(
      contracts.contracts.staking,
      stakingABI,
      wallet,
    )

    console.log('Contract loaded successfully.')

    const mindToStake = ethers.utils.parseEther('10000')
    console.log(`Staking ${ethers.utils.formatEther(mindToStake)} MIND...`)

    // Execute the stake function
    const tx = await contract.stake({ value: mindToStake })

    console.log('Stake request sent. Waiting for confirmation...')

    // Wait for the transaction to be confirmed
    await tx.wait()

    console.log('Stake successful!')
    console.log('Transaction hash:', tx.hash)
  } catch (error) {
    console.error('Error occurred while staking MIND:', error)
  }
}

module.exports = { stakemind }
