#!/usr/bin/env node

const { program } = require('commander');
const { version } = require("./package.json");
const getCurrentBlockDetails = require("./src/commands/micro-jobs/getcurrentblock");

// Dynamically import figlet and chalk
Promise.all([
    import('figlet'),
    import('chalk')
]).then(([figlet, chalk]) => {
    // Function to display ASCII art title
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

    program
      .command("micro-jobs")
      .description("microjob related subcommands")
      .command("getblock")
      .description("get current block details")
      .action(async () => {
        const blockDetails = await getCurrentBlockDetails();
        console.log(chalk.default.green("Current Block Details:"), blockDetails);
      });

    program.parse(process.argv);
});
