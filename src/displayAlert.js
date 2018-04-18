async function displayAlert(alert) {
  console.log(`${alert.website.name} (${alert.website.url}) went ${alert.status} with an availability of ${alert.availability} on ${new Date(alert.dateTimestamp)}`);
}

module.exports = displayAlert;

