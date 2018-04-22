// Import node modules
const axios = require('axios');
const config = require('../config.json');

// This function calls the run monitoring route of the back
// It starts the regular ping of website in background
function check() {
  axios.get(`${config.urlBack}/api/monitoring/run`);
  console.log('Puppy now checks websites');
}

// This function calls the stop monitoring route of the back
// It stops the regular ping of website in background
function stop() {
  axios.get(`${config.urlBack}/api/monitoring/stop`);
  console.log('Puppy doesn\'t check anymore');
}

// Export functions
module.exports = {
  check,
  stop,
};

