// Import node modules
const axios = require('axios');
const config = require('../config.json');

function monitor() {
  axios.get(`${config.urlBack}/monitoring`);
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

