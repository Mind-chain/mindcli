#!/usr/bin/env node

const { program } = require('commander'); 
const { version } = require('./package.json'); 
const Web3 = require('web3'); 


const web3 = new Web3('http://localhost:8545');

// Define the CLI command and description
program
  .command('evm-cli')
  .description('A CLI tool for interacting with an EVM based chain');

// Define the CLI options
program
  .option('-v, --version', 'output the current version')
  .option('-a, --accounts', 'list the accounts on the chain')
  .option('-b, --balance <address>', 'get the balance of an account')
  .option('-s, --send <from> <to> <amount>', 'send ether from one account to another');

// Parse the CLI arguments
program.parse(process.argv);

// Handle the CLI options
if (program.version) {
  // Output the current version
  console.log(version);
}

if (program.accounts) {
  // List the accounts on the chain
  web3.eth.getAccounts()
    .then(accounts => {
      console.log('Accounts:', accounts);
    })
    .catch(error => {
      console.error(error);
    });
}

if (program.balance) {
  // Get the balance of an account
  web3.eth.getBalance(program.balance)
    .then(balance => {
      console.log('Balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
    })
    .catch(error => {
      console.error(error);
    });
}

if (program.send) {
  // Send ether from one account to another
  const [from, to, amount] = program.send.split(' ');
  web3.eth.sendTransaction({
    from,
    to,
    value: web3.utils.toWei(amount, 'ether')
  })
    .then(receipt => {
      console.log('Transaction hash:', receipt.transactionHash);
    })
    .catch(error => {
      console.error(error);
    });
}