// Import node modules
const axios = require('axios');
const io = require('socket.io-client');
const config = require('../config.json');

let socket;

function monitor() {
  socket = io(config.urlBack);
  axios.get(`${config.urlBack}/monitoring`);
  console.log('Puppy is monitoring !');
}

function stop() {
  axios.delete(`${config.urlBack}/monitoring`);
  socket.disconnect();
  console.log('Puppy stopped monitoring.');
}

module.exports = {
  monitor,
  stop,
};

