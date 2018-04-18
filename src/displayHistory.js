const displayAlert = require('./displayAlert');

async function displayHistory(history) {
  history.map((alert) => {
    displayAlert(alert);
  });
}

module.exports = displayHistory;

