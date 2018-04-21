async function displayHistory(history) {
  history.map((alert) => {
    // The following lines are used to display readable statistics
    console.log(`${alert.website.name} (${alert.website.url}) went ${alert.status} with an availability of ${alert.availability} on ${new Date(alert.dateTimestamp)}`);
    // Empty lines are used to add space so alerts can be easily identified
    console.log('');
  });
}

module.exports = displayHistory;

