// Import node modules
const config = require('../config.json');
const displayStatistics = require('./displayStatistics');
const displayAlert = require('./displayAlert');
const io = require('socket.io-client');
const handleError = require('./errorHandler');
const blessed = require('blessed');

let socket;


function monitor() {
  try {
    // Create a screen object.
    const screen = blessed.screen({
      smartCSR: true,
      title: 'monitoring-puppy',
    });


    // Create a log box
    const logBox = blessed.box({
      top: '0%',
      left: '0%',
      valign: 'top',
      align: 'left',
      width: '50%',
      height: '100%',
      content: 'Hello {bold}world{/bold}!',
      tags: true,
      scrollable: true,
      border: {
        type: 'line',
      },
      style: {
        fg: 'white',
        bg: 'black',
        scrollbar: {
          bg: 'white',
        },
      },
    });

    // Create an alert box
    const alertBox = blessed.box({
      top: '0%',
      left: '50%',
      valign: 'top',
      align: 'left',
      width: '50%',
      height: '100%',
      content: 'Hello {bold}world{/bold}!',
      tags: true,
      scrollable: true,
      border: {
        type: 'line',
      },
      style: {
        fg: 'white',
        bg: 'black',
      },
    });

    // Append our box to the screen.
    screen.append(logBox);
    screen.append(alertBox);

    // Quit on Escape, q, or Control-C.
    screen.key(['escape', 'q', 'C-c'], (ch, key) => process.exit(0));

    screen.render();

    logBox.insertBottom('test');
    logBox.pushLine('test');
    screen.render();

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

