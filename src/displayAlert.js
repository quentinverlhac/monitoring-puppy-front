// This function is responsible for displaying alerts in blessed alertBox in terminal
async function displayAlert(alert, blessedBox) {
  // Refactor the date to be human readable
  const date = (new Date(alert.dateTimestamp)).toLocaleString();
  // Compute the status flag (red for DOWN alert, green for UP alert)
  let statusTag = '{red-fg}DOWN{/}';
  if (alert.status === 'up') {
    statusTag = '{green-fg}UP{/}';
  }
  // The following lines are used to display readable alerts
  blessedBox.log(`{blue-fg}${date}{/} - {yellow-fg}${alert.website.name}{/} (${alert.website.url}) is ${statusTag}`);
  blessedBox.log(`Availability: ${alert.availability} (over the last 2 minutes)`);
  // Empty lines are used to add space so alerts can be easily identified
  blessedBox.pushLine('');
}

// Export function
module.exports = displayAlert;

