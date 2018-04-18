// Import node modules
const axios = require('axios');
const config = require('../config.json');

function check() {
  axios.get(`${config.urlBack}/api/monitoring`);
  console.log('Puppy now checks websites');
}

function stop() {
  axios.delete(`${config.urlBack}/api/monitoring`);
  console.log('Puppy doesn\'t check anymore');
}

module.exports = {
  check,
  stop,
};

