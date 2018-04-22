// Import node modules
const config = require('../config.json');
const displayStatistics = require('./displayStatistics');
const displayAlert = require('./displayAlert');
const io = require('socket.io-client');
const handleError = require('./errorHandler');
const blessed = require('blessed');
const setUpLogBox = require('./blessedComponent/logBox');
const setUpAlertBox = require('./blessedComponent/alertBox');

let socket;

// This function tells the back to ping websites, to compute statistics and to send alerts.
// The function sets up two boxes in terminal, using blessed module.
// There is one box for statistics and the other for alerts.
// Then the funciton opens a socket (bilateral connection) with the back end.
// When the socket is opened, the back starts to ping websites.
// The back sends statistics and alerts through the socket.
// Once received by the front, they are displayed in the boxes using displayers functions.
function monitor() {
  try {
    // Create a screen object using blessed
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

    // Capture used inputs: quit on Escape, q, or Control-C.
    screen.key(['escape', 'q', 'C-c'], (ch, key) => process.exit(0));

    // Render the screen
    screen.render();

    // Set up socket connection to back
    socket = io(config.urlBack);
    // When the socket receive statistics, display them in the statistics box using statistics displayer
    socket.on('statistics', (statistics) => {
      displayStatistics(statistics, logBox);
      screen.render();
    });
    // When the socket receive alerts, display them in the alert box using alert displayer
    socket.on('alert', (alert) => {
      displayAlert(alert, alertBox);
      screen.render();
    });
  } catch (err) {
  // The request wasn't successful
    handleError(err);
  }
}

module.exports = monitor;

