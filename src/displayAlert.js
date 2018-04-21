async function displayAlert(alert, blessedBox) {
  let statusTag = '{red-fg}DOWN{/}';
  if (alert.status === 'up') {
    statusTag = '{green-fg}UP{/}';
  }
  // The following lines are used to display readable alerts
  blessedBox.pushLine('/!\\ ALERT /!\\');
  blessedBox.pushLine(`${alert.website.name} (${alert.website.url}) is ${statusTag}`);
  blessedBox.pushLine(`Date: ${new Date(alert.dateTimestamp)}`);
  blessedBox.pushLine(`Availability: ${alert.availability} (over the last 2 minutes)`);
  // Empty lines are used to add space so alerts can be easily identified
  blessedBox.pushLine('');
}

module.exports = displayAlert;

