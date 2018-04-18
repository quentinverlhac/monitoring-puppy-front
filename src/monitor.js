// Import node modules
const config = require('../config.json');
const displayStatistics = require('./displayStatistics');
const displayAlert = require('./displayAlert');
const io = require('socket.io-client');
const handleError = require('./errorHandler');

let socket;

function monitor() {
  try {
    socket = io(config.urlBack);
    socket.on('statistics', (statistics) => {
      displayStatistics(statistics);
    });
    socket.on('alert', (alert) => {
      displayAlert(alert);
    });
    console.log('Puppy is monitoring, displaying statistics and sending alerts !');
  } catch (err) {
  // The request wasn't successful
    handleError(err);
  }
}

module.exports = monitor;

