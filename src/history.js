// Import node modules
const axios = require('axios');
const config = require('../config.json');
const displayHistory = require('./displayHistory');

async function getHistory() {
  const response = await axios.get(`${config.urlBack}/api/history/0`);
  displayHistory(response.data);
}

module.exports = getHistory;

