// Import node modules
const config = require('../config.json');
const displayStatistics = require('./displayStatistics');
const displayAlert = require('./displayAlert');
const io = require('socket.io-client');
const handleError = require('./errorHandler');
const blessed = require('blessed');
const setUpLogBox = require('./blessedComponents/logBox');
const setUpAlertBox = require('./blessedComponents/alertBox');

let socket;


function monitor() {
  try {
    // Create a screen object
    const screen = blessed.screen({
      smartCSR: true,
      title: 'monitoring-puppy',
    });

    // Create terminal boxes
    const logBox = setUpLogBox(blessed);
    const alertBox = setUpAlertBox(blessed);

    // Append boxes to the screen
    screen.append(logBox);
    screen.append(alertBox);

    // Quit on Escape, q, or Control-C.
    screen.key(['escape', 'q', 'C-c'], (ch, key) => process.exit(0));

    // Render the screen
    screen.render();

    // Set up socket connection to back
    socket = io(config.urlBack);
    socket.on('statistics', (statistics) => {
      displayStatistics(statistics, logBox);
      screen.render();
    });
    socket.on('alert', (alert) => {
      displayAlert(alert, logBox);
      screen.render();
    });
    console.log('Puppy is monitoring, displaying statistics and sending alerts !');
  } catch (err) {
  // The request wasn't successful
    handleError(err);
  }
}

module.exports = monitor;

