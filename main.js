#!/usr/bin/env node

// Import node modules
// Commander is a solution for creating command-line interface
const program = require('commander');
const {
  addWebsite, listWebsites, updateWebsite, removeWebsite,
} = require('./src/website');
const { check, stop } = require('./src/check');
const monitor = require('./src/monitor');
const getHistory = require('./src/history');

// Define metadata of the application
program
  .version('0.1.0')
  .description('Puppy is a website monitoring application.\n  You can add several websites to monitor and run the monitoring to display statistics and alerts.\n  It is also possible to keep on checking websites without displaying messages in the console.\n');

// Add website command
program
  .command('add <website> <url> <check_interval>')
  .description('\n  Add a website to monitoring\n  <website> [string] the name of the website\n  <url> [string] the url of the website\n  <check_interval> [number] the time interval between each website check (in second)\n')
  .action(addWebsite);

// List monitored websites command
program
  .command('list')
  .description('\n  List all monitored websites\n')
  .action(listWebsites);

// Update website command
program
  .command('update <website>')
  .option('-n, --name [string]', 'the new website name')
  .option('-u, --url [string]', 'the new website url')
  .option('-i, --interval [number]', 'the new check interval')
  .description('\n  Update the given fields of the website <website>\n  -n --name [string] the new name of the website\n  -u --url [string] the new url of the website\n  -i --interval [number] the new time interval between website checks (in seconds)\n  Exemple: puppy update -n new.name -i 3 old.name rename old.name to new.name and change its check interval to 3 seconds\n')
  .action(updateWebsite);

// Add website command
program
  .command('remove <website>')
  .description('\n  Remove the website given by its name <website>\n')
  .action(removeWebsite);

// Monitoring command
program
  .command('check')
  .description('\n  Start the checking of all the websites on the remote server\n  /!\\ CAUTION /!\\ the checking will not stop until "puppy stop" command is run, even if this shell is closed\n')
  .action(check);

// Stop monitoring command
program
  .command('stop')
  .description('\n  Stop the checking of all websites\n')
  .action(stop);

// Run command
program
  .command('monitor')
  .description('\n  Start the monitoring of websites\n  Regularly, websites are checked, statistics are displayed and alert are prompted if there is an emergency\n  End the monitoring by pressing CTRL+C in this shell. This will stop the checking.\n')
  .action(monitor);

// History command
program
  .command('history')
  .description('\n  Get the history of past alerts\n')
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
