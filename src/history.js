// Import node modules
const axios = require('axios');
const config = require('../config.json');
const displayHistory = require('./displayHistory');
const handleError = require('./errorHandler');

// This function calls the get history route of the back
// It gets all the alerts and display them using displayHistory function
async function getHistory() {
  try {
    // Send get history request to back end
    const response = await axios.get(`${config.urlBack}/api/alert/0`);
    // Display history using displayHistory function
    displayHistory(response.data);
  } catch (err) {
  // The request wasn't successful
    handleError(err);
  }
}

module.exports = getHistory;

