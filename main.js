#!/usr/bin/env node

// Import node modules
// Commander is a solution for creating command-line interface
const program = require('commander');
const {
  addWebsite, listWebsites, updateWebsite, removeWebsite,
} = require('./src/website');
const { monitor, stop } = require('./src/monitoring');
const run = require('./src/run');
const getHistory = require('./src/history');

// Define metadata of the application
program
  .version('0.1.0')
  .description('Puppy is a website monitoring application.\n  You can add several websites to monitor and run the monitoring to display statistics and alerts.\n  It is also possible to keep on checking websites without displaying messages in the console.\n');

// Add website command
program
  .command('add <website> <url> <check_interval>')
  .description('\nAdd a website to monitoring\n  <website> [string] is the name of the website\n  <url> [string] is the url of the website\n  <check_interval> [number] is the time interval between each website check\n')
  .action(addWebsite);

// List monitored websites command
program
  .command('list')
  .description('\nList all monitored websites\n')
  .action(listWebsites);

// Update website command
program
  .command('update <website>')
  .option('-n, --name [string]', 'the new website name')
  .option('-u, --url [string]', 'the new website url')
  .option('-i, --interval [number]', 'the new check interval')
  .description('\nUpdate one of several fields of the website given by its name <website>\n  -n --name [string] the new name of the website\n  -u --url [string] the new url of the website\n  -i --interval [number] the new time interval between website checks\n')
  .action(updateWebsite);

// Add website command
program
  .command('remove <website>')
  .description('\nRemove the website given by its name <website>\n')
  .action(removeWebsite);

// Monitoring command
program
  .command('monitor')
  .description('\nStart the checking of all the websites on the remote server\n  /!\\ CAUTION /!\\ the checking will not stop until "puppy stop" command is run, even if this shell is closed\n')
  .action(monitor);

// Stop monitoring command
program
  .command('stop')
  .description('\nStop the checking of all websites\n')
  .action(stop);

// Run command
program
  .command('run')
  .description('\nStart the monitoring of websites\n  Regularly, websites are checked, statistics are displayed and alert are prompted if there is an emergency\n  End the monitoring by pressing CTRL+C in this shell. This will stop the checking.\n')
  .action(run);

// History command
program
  .command('history')
  .description('\nGet the history of past alerts\n')
  .action(getHistory);

program
  .command('*')
  .action(() => {
    console.log('Please type puppy -h to see the list of all commands');
  });

program.parse(process.argv);

if (program.args.length < 1) {
  console.log('Welcome to monitoring puppy, the website monitoring application');
  console.log('Please type puppy -h to see the list of all commands');
}
