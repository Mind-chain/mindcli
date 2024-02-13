// showValidators.js

const { ethers } = require('ethers');
const { stakingABI } = require('./../../abi/stakingABI');
const { urls, contracts } = require('./../../config/index');

async function showValidators() {
    try {
        console.log('Connecting to MIND network...');
        
        const provider = new ethers.providers.JsonRpcProvider(urls.mainnet_rpc.http_rpc); 

        console.log('Connected to MIND network successfully.');

        // Load the contract
        const contract = new ethers.Contract(contracts.contracts.staking, stakingABI, provider);

        console.log('Contract loaded successfully.');

        console.log('Fetching validators...');
        
        // Fetch all validators
        const validators = await contract.validators();

        console.log('Validators:');
        validators.forEach((validator, index) => {
            console.log(`${index + 1}. ${validator}`);
        });
    } catch (error) {
        console.error('Error occurred while fetching validators:', error);
    }
}

module.exports = { showValidators };
