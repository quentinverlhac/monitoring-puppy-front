// Copyright (C) 2018 Quentin VERLHAC

// Import node modules
const axios = require('axios');

async function addWebsite(website, url, check_interval) {
  const response = await axios.post(
    'http://localhost:8080/api/website',
    {
      name: website,
      url,
      checkInterval: check_interval,
    },
  );
  console.log('Puppy will now check %s (%s) every %s seconds when it is monitoring', website, url, check_interval);
}

async function listWebsites() {
  const response = await axios.get('http://localhost:8080/api/website');
  console.log('Puppy has registered the following websites:');
  console.log('-------------------------------------');
  console.log('name - url - check interval (seconds)');
  console.log('-------------------------------------');
  response.data.map((website) => {
    console.log(website.name, '-', website.url, '-', website.checkInterval);
  });
}

module.exports = {
  addWebsite,
  listWebsites,
};

