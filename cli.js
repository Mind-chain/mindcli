#!/usr/bin/env node

const { program } = require('commander');
const { version } = require("./package.json");
const getCurrentBlockDetails = require("./src/commands/explorer/getcurrentblock");
const {findBlock} = require("./src/commands/explorer/findblock");


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



    program.parse(process.argv);
});
