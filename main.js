#!/usr/bin/env node

// Copyright (C) 2018 Quentin VERLHAC

// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.

// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
// OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
// CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.


// Import node modules
// Commander is a solution for creating command-line interface
const program = require('commander');

function addWebsite(website, url, time_interval) {
  console.log('Puppy will now check %s (%s) every %s seconds', website, url, time_interval);
}

function listWebsites() {
  console.log('Puppy has websites');
}

function run() {
  console.log('Puppy is running !');
}

// Define metadata of the application
program
  .version('0.1.0')
  .description('A website monitoring application');

// Add website command
program
  .command('add <website> <url> <time_interval>')
  .action(addWebsite);

program
  .command('list')
  .action(listWebsites);

program
  .command('run')
  .action(run);

program.parse(process.argv);

