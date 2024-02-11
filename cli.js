#!/usr/bin/env node

const { program } = require('commander');
const { version } = require("./package.json");

program
  .version(version)
  .description('CLI for interacting with an EVM-based chain');

program
  .command('version')
  .description('Display the current version')
  .action(() => {
    console.log('CLI Version:', version);
  });

program.parse(process.argv);
