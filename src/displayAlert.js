async function displayAlert(alert) {
  // The following lines are used to display readable statistics
  // Empty lines are used to add space so alerts can be easily identified
  console.log('');
  console.log('/!\\ ALERT /!\\');
  console.log('');
  // console.group() add indentation
  console.group();
  console.log(`${alert.website.name} (${alert.website.url}) went ${alert.status} with an availability of ${alert.availability} on ${new Date(alert.dateTimestamp)}`);
  // console.groupEnd() remove indentation
  console.groupEnd();
  console.log('');
  console.log('-- END --');
  console.log('');
}

module.exports = displayAlert;

