// Import node modules
const axios = require('axios');
const config = require('../config.json');
const handleError = require('./errorHandler');

// The function which handle the add command
async function addWebsite(website, url, check_interval) {
  try {
  // Send website creation request to back end
    const response = await axios.post(
      `${config.urlBack}/api/website`,
      {
        name: website,
        url,
        checkInterval: check_interval,
      },
    );
    // Display a confirmation
    console.log('Puppy will now check %s (%s) every %s seconds when it is monitoring', response.data.name, response.data.url, response.data.checkInterval);
  } catch (err) {
    // The request wasn't successful
    handleError(err);
  }
}

// The function which handle the list command
async function listWebsites() {
  try {
  // Retrieve websites from back end
    const response = await axios.get(`${config.urlBack}/api/website`);
    // Display website
    console.log('Puppy has registered the following websites:');
    console.log('-------------------------------------');
    console.log('name - url - check interval (seconds)');
    console.log('-------------------------------------');
    response.data.map((website) => {
      console.log(website.name, '-', website.url, '-', website.checkInterval);
    });
  } catch (err) {
  // The request wasn't successful
    handleError(err);
  }
}

// The function which handle the update command
async function updateWebsite(website, options) {
  try {
    if (typeof (options.name) !== 'string' && typeof (options.url) !== 'string' && typeof (options.interval) !== 'string') {
      // There is no argument
      console.log('Please enter at least one field to update');
      console.log('See how to do it using puppy -help');
    } else {
      // Send website update request to back end
      const response = await axios.put(
        `${config.urlBack}/api/website/${website}`,
        {
          name: options.name,
          url: options.url,
          checkInterval: options.interval,
        },
      );
      // Display a confirmation
      console.log('Puppy will now check %s (%s) every %s sec. when it is monitoring', response.data.name, response.data.url, response.data.checkInterval);
    }
  } catch (err) {
  // The request wasn't successful
    handleError(err);
  }
}

// The function which handle the remove command
async function removeWebsite(website) {
  try {
  // Send website creation request to back end
    const response = await axios.delete(`${config.urlBack}/api/website/${website}`);
    // Display a confirmation
    console.log(`${response.data.name} (${response.data.url}) has been removed`);
  } catch (err) {
  // The request wasn't successful
    handleError(err);
  }
}

module.exports = {
  addWebsite,
  listWebsites,
  updateWebsite,
  removeWebsite,
};

