// Import node modules
const axios = require('axios');
const config = require('../config.json');
const handleError = require('./errorHandler');

// The function which handle the add command
// It sends a website creation request to the back
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
// It sends a website list request to the back
async function listWebsites() {
  try {
  // Retrieve websites from back end
    const response = await axios.get(`${config.urlBack}/api/website`);
    if (response.data.length > 0) {
      // Display website
      console.log('Puppy has registered the following websites:');
      // console.group() is used to add indentation
      console.group();
      console.log('');
      console.log('name - url - check interval (seconds)');
      console.log('-------------------------------------');
      response.data.map((website) => {
        console.log(website.name, '-', website.url, '-', website.checkInterval);
      });
      console.log('-------------------------------------');
      console.groupEnd();
    } else {
      console.log('Puppy has no website registered yet');
      console.log('To add website, use puppy add (see puppy --help for more information)');
    }
  } catch (err) {
  // The request wasn't successful
    handleError(err);
  }
}

// The function which handle the update command
// It sends a website update request to the back
async function updateWebsite(website, options) {
  try {
    if (typeof (options.name) !== 'string' && typeof (options.url) !== 'string' && typeof (options.interval) !== 'string') {
      // If there is no argument, asked the user to add some
      console.log('Please enter at least one field to update');
      console.log('See how to do it using puppy -help');
    } else {
      // There are arguments
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
      // The back end is responsible for checking if the input is correct
      console.log('Puppy will now check %s (%s) every %s sec. when it is monitoring', response.data.name, response.data.url, response.data.checkInterval);
    }
  } catch (err) {
  // The request wasn't successful
    handleError(err);
  }
}

// The function which handle the remove command
// It sends a delete website request to the back
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

// Export functions
module.exports = {
  addWebsite,
  listWebsites,
  updateWebsite,
  removeWebsite,
};

