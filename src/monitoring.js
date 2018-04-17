// Import node modules
const axios = require('axios');
const config = require('../config.json');
const displayStatistics = require('./statistics');
const displayAlert = require('./alerts');
const io = require('socket.io-client');

let socket;

function monitor() {
  axios.get(`${config.urlBack}/monitoring`);
  socket = io('http://localhost:8080');
  socket.on('statistics', (statistics) => {
    displayStatistics(statistics);
  });
  socket.on('alert', (alert) => {
    displayAlert(alert);
  });
  console.log('Puppy is monitoring !');
}

function stop() {
  axios.delete(`${config.urlBack}/monitoring`);
  console.log('Puppy stopped monitoring.');
}

module.exports = {
  monitor,
  stop,
};

