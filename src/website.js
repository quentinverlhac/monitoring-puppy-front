// Copyright (C) 2018 Quentin VERLHAC

// Import node modules
const axios = require('axios');

// The function which handle the add command
async function addWebsite(website, url, check_interval) {
  // Send website creation request to back end
  const response = await axios.post(
    'http://localhost:8080/api/website',
    {
      name: website,
      url,
      checkInterval: check_interval,
    },
  );
  // Display a confirmation
  console.log('Puppy will now check %s (%s) every %s seconds when it is monitoring', response.data.website, response.data.url, response.data.checkInterval);
}

// The function which handle the list command
async function listWebsites() {
  // Retrieve websites from back end
  const response = await axios.get('http://localhost:8080/api/website');
  // Display website
  console.log('Puppy has registered the following websites:');
  console.log('-------------------------------------');
  console.log('name - url - check interval (seconds)');
  console.log('-------------------------------------');
  response.data.map((website) => {
    console.log(website.name, '-', website.url, '-', website.checkInterval);
  });
}

// The function which handle the update command
async function updateWebsite(website, options) {
  // Send website update request to back end
  const response = await axios.put(
    `http://localhost:8080/api/website/${website}`,
    {
      name: options.name,
      url: options.url,
      checkInterval: options.interval,
    },
  );
  // Display a confirmation
  console.log('Puppy will now check %s (%s) every %s sec. when it is monitoring', response.data.website, response.data.url, response.data.checkInterval);
}

module.exports = {
  addWebsite,
  listWebsites,
  updateWebsite,
};

