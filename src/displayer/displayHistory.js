// This function is responsible for displaying a human readable history in terminal
async function displayHistory(history) {
  // Apply the following pattern for each alert in history array
  history.map((alert) => {
    // Refactor the date to be human readable
    const date = (new Date(alert.dateTimestamp)).toLocaleString();
    // The following lines are used to display readable statistics
    console.log(`${date} - ${alert.website.name} (${alert.website.url}) went ${alert.status} with an availability of ${alert.availability}`);
    // Empty lines are used to add space so alerts can be easily identified
    console.log('');
  });
}

// Export function
module.exports = displayHistory;

