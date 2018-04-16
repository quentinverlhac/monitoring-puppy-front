// Import node modules
const axios = require('axios');
const config = require('../config.json');
const displayStatistics = require('./statistics');

const interval = [];

async function monitor() {
  await axios.get(`${config.urlBack}/monitoring`);
  const response = await axios.get(`${config.urlBack}/website`);
  response.data.map((website) => {
    interval.push(setInterval(displayStatistics, 10000, website.name, 60000));
    interval.push(setInterval(displayStatistics, 60000, website.name, 3600000));
  });
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

