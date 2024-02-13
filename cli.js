#!/usr/bin/env node

const { program } = require('commander');
const { version } = require("./package.json");
const getCurrentBlockDetails = require("./src/commands/explorer/getcurrentblock");
const {findBlock} = require("./src/commands/explorer/findblock");
const { checkAddress } = require("././src/commands/explorer/search-address")
const {searchTransaction } = require('./src/commands/explorer/searchTransaction')


Promise.all([
  import('figlet'),
  import('chalk')
]).then(([figlet, chalk]) => {

  function displayTitle() {
      console.log(chalk.default.yellow(figlet.default.textSync('MSC-CLI', { horizontalLayout: 'full' })));
  }

  // Display the title when the program starts
  displayTitle();

    program
      .version(version)
      .description('CLI for interacting with an EVM-based chain');

    program
      .command('version')
      .description('Display the current version')
      .action(() => {
        console.log('CLI Version:', version);
      });

      const explorer = program.command("explorer")
      .description("explorer related subcommands");

    explorer
      .command("getblock")
      .description("get current block details")
      .action(async () => {
        const blockDetails = await getCurrentBlockDetails();
        console.log(chalk.green("Current Block Details:"), blockDetails);
      });

    explorer
      .command("searchblock <blocknumber>")
      .description("search block by block number")
      .action(async (blockNumber) => {
        
        try {
          const blockDetails = await findBlock(parseInt(blockNumber));
            console.log(`Block ${blockNumber} Details:`, blockDetails);
        } catch (error) {
            console.error("Error occurred while finding block details:", error.message);
        }
    });
    explorer 
    .command("checkaddress <address>")
    .description("check details of an MSC address")
    .action(async (address) => {
        try {
            const addressDetails = await checkAddress(address);
            console.log(`Details for address ${address}:`);
            console.log("Balance:", addressDetails.balance+" MIND");
            console.log("Transaction Count:", addressDetails.transactionCount);
            console.log("Code Exists:", addressDetails.codeExists ? "Yes" : "No");
            //console.log("ENS Name:", addressDetails.ensName);
        } catch (error) {
            console.error(error.message);
        }
    });

    explorer
    
    .command("searchtransaction <transactionHash>")
    .description("search details of an MSC transaction")
    .action(async (transactionHash) => {
        try {
            const transactionDetails = await searchTransaction(transactionHash);
            console.log(`Details for transaction ${transactionHash}:`);
            console.log("Hash:", transactionDetails.hash);
            console.log("Block Number:", transactionDetails.blockNumber);
            console.log("From:", transactionDetails.from);
            console.log("To:", transactionDetails.to);
            console.log("Value:", transactionDetails.value + " MIND");
            console.log("Gas Price:", transactionDetails.gasPrice);
            console.log("Gas Limit:", transactionDetails.gasLimit);
            console.log("Nonce:", transactionDetails.nonce);
            console.log("Timestamp:", transactionDetails.timestamp);
            console.log("Confirmations:", transactionDetails.confirmations);
        } catch (error) {
            console.error(chalk.yellow(error.message));
        }
    });


    program.parse(process.argv);
});
