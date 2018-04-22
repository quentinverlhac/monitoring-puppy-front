// This function is responsible for displaying statistics in blessed statisticsBox in terminal
async function displayStatistics(statistics, blessedBox) {
  // Refactor the date to be human readable
  const date = (new Date(statistics.date)).toLocaleString();
  // The following lines are used to display readable statistics
  blessedBox.log(`{blue-fg}${date}{/} - {yellow-fg}${statistics.websiteName}{/} statistics for the last ${statistics.duration / 1000} seconds`);
  blessedBox.log(`Average availability: ${statistics.availability}`);
  blessedBox.log(`Maximum response time: ${statistics.maxResponseTime} ms`);
  blessedBox.log(`Average response time: ${statistics.averageResponseTime} ms`);
  blessedBox.log('Response status codes count:');
  // Get each response code and print it with its number of occurences
  Object.keys(statistics.responseCodes).map((code) => {
    if (code !== 'null') {
      // If there is a response code, display it
      blessedBox.log(`  ${code}: ${statistics.responseCodes[code]} occurences`);
    } else {
      // If there wasn't any code (= no response), change the display
      blessedBox.log(`  Without response: ${statistics.responseCodes[code]} occurences`);
    }
  });
  // A last line to add space between different websites statistics
  blessedBox.log('');
}

// Export function
module.exports = displayStatistics;

