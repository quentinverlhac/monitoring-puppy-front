// Import node modules
const axios = require('axios');
const config = require('../config.json');
const displayStatistics = require('./statistics');

const interval = [];

function monitor() {
  axios.get(`${config.urlBack}/monitoring`);
  socket = io('http://localhost:8080');
  socket.on('statistics', (statistics) => {
    console.log(statistics);
  });
  console.log('Puppy is monitoring !');
}

function stop() {
  clearInterval(interval);
  axios.delete(`${config.urlBack}/monitoring`);
  console.log('Puppy stopped monitoring.');
}

module.exports = {
  monitor,
  stop,
};

