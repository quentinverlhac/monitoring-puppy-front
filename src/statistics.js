// Import node modules
const axios = require('axios');
const config = require('../config.json');

async function displayStatistics(websiteName, duration) {
  const response = await axios.get(`${config.urlBack}/statistic/${websiteName}/${duration}`);
  console.log(response.data);
}

module.exports = displayStatistics;

