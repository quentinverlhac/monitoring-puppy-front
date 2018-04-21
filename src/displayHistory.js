async function displayHistory(history) {
  history.map((alert) => {
    const date = (new Date(alert.dateTimestamp)).toLocaleString();
    // The following lines are used to display readable statistics
    console.log(`${date} - ${alert.website.name} (${alert.website.url}) went ${alert.status} with an availability of ${alert.availability}`);
    // Empty lines are used to add space so alerts can be easily identified
    console.log('');
  });
}

module.exports = displayHistory;

