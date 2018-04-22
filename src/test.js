// Import node modules
const config = require('../config.json');
const { addWebsite } = require('./website');

// This function will add the two tests routes to the website list
async function addTests() {
  // Add the alert test route to websites
  await addWebsite('alertTest', `${config.urlBack}/api/test/cos`, 1);
  // Add the codes test route to websites
  await addWebsite('codesTest', `${config.urlBack}/api/test/random`, 5);
}

// Export function
module.exports = addTests;
