// Import node modules
const axios = require('axios');
const config = require('../config.json');

function monitor() {
  axios.get(`${config.urlBack}/api/monitoring`);
  console.log('Puppy now pings websites');
}

function stop() {
  axios.delete(`${config.urlBack}/api/monitoring`);
  console.log('Puppy doesn\'t ping anymore');
}

module.exports = {
  monitor,
  stop,
};

