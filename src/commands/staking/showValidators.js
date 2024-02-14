// showValidators.js

const { ethers } = require('ethers');
const { stakingABI } = require('../../abi/stakingABI');
const { urls, contracts } = require('../../config/index');
const { erc20ABI } = require('../../abi/erc20');

async function showValidators() {
  try {
    console.log('Connecting to MIND network...');

    const provider = new ethers.providers.JsonRpcProvider(
      urls.mainnet_rpc.http_rpc
    );

    console.log('Connected to MIND network successfully.');

    // Load the contract
    const contract = new ethers.Contract(
      contracts.contracts.staking,
      stakingABI,
      provider
    );
    const rewardContract = new ethers.Contract(
      contracts.contracts.pmind,
      erc20ABI,
      provider
    );

    console.log('Contract loaded successfully.');

    console.log('Fetching validators...');

    // Fetch all validators
    const validators = await contract.validators();
    const totalStake = await contract.stakedAmount();
    console.log(
      'Total Mind Staked by Validators : ',
      ethers.utils.formatEther(totalStake) + ' MIND'
    );

    console.log('Validators:');
    for (let index = 0; index < validators.length; index++) {
      const validator = validators[index];
      const rewardHolding = await rewardContract.balanceOf(validator);
      console.log(`${index + 1}. ${validator} - Total PMIND received: ${ethers.utils.formatEther(rewardHolding)}`);
    }
  } catch (error) {
    console.error('Error occurred while fetching validators:', error);
  }
}

module.exports = { showValidators };
