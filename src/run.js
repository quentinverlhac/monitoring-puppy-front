// Import node modules
const config = require('../config.json');
const displayStatistics = require('./statistics');
const displayAlert = require('./alerts');
const io = require('socket.io-client');

let socket;

function run() {
  socket = io(config.urlBack);
  socket.on('statistics', (statistics) => {
    displayStatistics(statistics);
  });
  socket.on('alert', (alert) => {
    displayAlert(alert);
  });
  console.log('Puppy is monitoring, displaying statistics and sending alerts !');
}

module.exports = run;

