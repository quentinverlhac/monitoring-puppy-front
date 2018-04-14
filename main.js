#!/usr/bin/env node

// Import node modules
// Commander is a solution for creating command-line interface
const program = require('commander');
const {
  addWebsite, listWebsites, updateWebsite, removeWebsite,
} = require('./src/website');

function monitor() {
  console.log('Puppy is monitoring !');
}

// Define metadata of the application
program
  .version('0.1.0')
  .description('A website monitoring application');

// Add website command
program
  .command('add <website> <url> <check_interval>')
  .action(addWebsite);

// List monitored websites command
program
  .command('list')
  .action(listWebsites);

// Update website command
program
  .command('update <website>')
  .option('-n, --name [string]', 'the new website name')
  .option('-u, --url [string]', 'the new website url')
  .option('-i, --interval [number]', 'the new check interval')
  .action(updateWebsite);

// Add website command
program
  .command('remove <website>')
  .action(removeWebsite);

// Run monitoring command
program
  .command('monitor')
  .action(monitor);

program.parse(process.argv);

