#!/usr/bin/env node

const { program } = require('commander')
const { version } = require('./package.json')
const getCurrentBlockDetails = require('./src/commands/explorer/getcurrentblock')
const { findBlock } = require('./src/commands/explorer/findblock')
const { checkAddress } = require('././src/commands/explorer/search-address')
const {
  searchTransaction,
} = require('./src/commands/explorer/searchTransaction')
const { stakemind } = require('./src/commands/staking/stake')
const { unstakeMind } = require('./src/commands/staking/unstake')
const { showValidators } = require('./src/commands/staking/showValidators')
const { createWallet } = require('././src/commands/wallet/createwallet')
const installMind = require('./src/commands/node/install-node')
const initSecrets = require('./src/commands/node/setupnode')
const startMindServer = require('./src/commands/node/start')
const generateGenesisJson = require('./src/commands/node/getgenesis')
Promise.all([import('figlet'), import('chalk')]).then(([figlet, chalk]) => {
  function displayTitle() {
    console.log(
      chalk.default.yellow(
        figlet.default.textSync('MSC-CLI', { horizontalLayout: 'full' }),
      ),
    )
  }

  // Display the title when the program starts
  displayTitle()

  program.version(version).description('CLI for interacting with Mind-chain')

  program
    .command('version')
    .description('Display the current version')
    .action(() => {
      console.log('CLI Version:', version)
    })

  const explorer = program
    .command('explorer')
    .description('explorer related subcommands')

  explorer
    .command('getblock')
    .description('get current block details')
    .action(async () => {
      const blockDetails = await getCurrentBlockDetails()
      console.log('Current Block Details:', blockDetails)
    })

  explorer
    .command('searchblock <blocknumber>')
    .description('search block by block number')
    .action(async (blockNumber) => {
      try {
        const blockDetails = await findBlock(parseInt(blockNumber))
        console.log(`Block ${blockNumber} Details:`, blockDetails)
      } catch (error) {
        console.error(
          'Error occurred while finding block details:',
          error.message,
        )
      }
    })
  explorer
    .command('checkaddress <address>')
    .description('check details of an MSC address')
    .action(async (address) => {
      try {
        const addressDetails = await checkAddress(address)
        console.log(`Details for address ${address}:`)
        console.log('Balance:', addressDetails.balance + ' MIND')
        console.log('Transaction Count:', addressDetails.transactionCount)
        console.log('Code Exists:', addressDetails.codeExists ? 'Yes' : 'No')
        //console.log("ENS Name:", addressDetails.ensName);
      } catch (error) {
        console.error(error.message)
      }
    })

  explorer

    .command('searchtransaction <transactionHash>')
    .description('search details of an MSC transaction')
    .action(async (transactionHash) => {
      try {
        const transactionDetails = await searchTransaction(transactionHash)
        console.log(`Details for transaction ${transactionHash}:`)
        console.log('Hash:', transactionDetails.hash)
        console.log('Block Number:', transactionDetails.blockNumber)
        console.log('From:', transactionDetails.from)
        console.log('To:', transactionDetails.to)
        console.log('Value:', transactionDetails.value + ' MIND')
        console.log('Gas Price:', transactionDetails.gasPrice)
        console.log('Gas Limit:', transactionDetails.gasLimit)
        console.log('Nonce:', transactionDetails.nonce)
        console.log('Timestamp:', transactionDetails.timestamp)
        console.log('Confirmations:', transactionDetails.confirmations)
      } catch (error) {
        console.error(chalk.yellow(error.message))
      }
    })

  //staking commands
  const staking = program
    .command('staking')
    .description('staking related subcommands')

  staking
    .command('stake <privateKey>')
    .description('stake mind to the contract')
    .action(async (privateKey) => {
      try {
        await stakemind(privateKey)
      } catch (error) {
        console.error(error.message)
      }
    })
  staking
    .command('unstake <privateKey>')
    .description('unstake MIND from the contract')
    .action(async (privateKey) => {
      try {
        await unstakeMind(privateKey)
      } catch (error) {
        console.error(chalk.red(error.message))
      }
    })
  staking
    .command('get-validators')
    .description('show all current active validators')
    .action(async () => {
      try {
        await showValidators()
      } catch (error) {
        console.error(chalk.red(error.message))
      }
    })

  //wallet management

  const wallet = program
    .command('wallet')
    .description('wallet management related subcommands')

  wallet
    .command('createwallet')
    .option('-p, --path <path>', 'Path to store the wallet file')
    .action((options) => {
      // Check if the --path option is provided
      if (!options.path) {
        console.error(
          'Error: Please provide the path to store the wallet using --path option.',
        )
        process.exit(1)
      }

      // Call createWallet function with the specified path
      createWallet(options.path)
    })

  const node = program
    .command('node ')
    .description('node management related subcommands')

  node
    .command('install-mind')
    .description('Install Mind binary')
    .action(installMind)

  node
    .command('init-secrets')
    .description('Initialize Mind secrets')
    .option('-d, --data-dir <directory>', 'Specify the data directory')
    .action((options) => {
      if (!options.dataDir) {
        console.error(
          chalk.red(
            'Error: Please specify the data directory using -d or --data-dir option.',
          ),
        )
        process.exit(1)
      }

      initSecrets(options.dataDir)
    })
  node
    .command('start-mind-server')
    .description('Start Mind node')
    .action(() => {
      startMindServer()
    })

  node
    .command('get-genesis')
    .description('dump genesis JSON file')
    .action(() => {
      generateGenesisJson()
    })

  program.parse(process.argv)
})
