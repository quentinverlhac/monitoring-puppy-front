// Import node modules
const axios = require('axios');
const config = require('../config.json');
const displayHistory = require('./displayHistory');
const handleError = require('./errorHandler');

async function getHistory() {
  try {
    // Send get history request to back end
    const response = await axios.get(`${config.urlBack}/api/history/0`);
    displayHistory(response.data);
  } catch (err) {
  // The request wasn't successful
    handleError(err);
  }
}

module.exports = getHistory;

