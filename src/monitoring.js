// Import node modules
const axios = require('axios');
const io = require('socket.io-client');
const config = require('../config.json');

let socket;

function monitor() {
  axios.get(`${config.urlBack}/monitoring`);
  socket = io('http://localhost:8080');
  socket.on('statistics', (statistics) => {
    console.log(statistics);
  });
  console.log('Puppy is monitoring !');
}

function stop() {
  socket.disconnect();
  axios.delete(`${config.urlBack}/monitoring`);
  console.log('Puppy stopped monitoring.');
}

module.exports = {
  monitor,
  stop,
};

