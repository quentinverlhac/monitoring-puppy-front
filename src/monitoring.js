// Import node modules
const axios = require('axios');
const config = require('../config.json');

let interval;

function monitor() {
  axios.get(`${config.urlBack}/monitoring`);
  interval = setInterval(() => console.log('test'), 1000);
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

