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
  console.log('Puppy will now check %s (%s) every %s seconds', website, url, check_interval);
}

module.exports = addWebsite;

