async function displayAlert(alert, blessedBox) {
  // The following lines are used to display readable statistics
  // Empty lines are used to add space so alerts can be easily identified
  blessedBox.pushLine('');
  blessedBox.pushLine('/!\\ ALERT /!\\');
  blessedBox.pushLine('');
  // console.group() add indentation
  // console.group();
  blessedBox.pushLine(`${alert.website.name} (${alert.website.url}) went ${alert.status} with an availability of ${alert.availability} on ${new Date(alert.dateTimestamp)}`);
  // console.groupEnd() remove indentation
  // console.groupEnd();
  blessedBox.pushLine('');
  blessedBox.pushLine('-- END --');
  blessedBox.pushLine('');
}

module.exports = displayAlert;

