async function displayStatistics(statistics, blessedBox) {
  // The following lines are used to display readable statistics
  const date = (new Date(statistics.date)).toLocaleString();
  blessedBox.log(`{blue-fg}${date}{/} - {yellow-fg}${statistics.websiteName}{/} statistics for the last ${statistics.duration / 1000} seconds`);
  blessedBox.log(`Average availability: ${statistics.availability}`);
  blessedBox.log(`Maximum response time: ${statistics.maxResponseTime} ms`);
  blessedBox.log(`Average response time: ${statistics.averageResponseTime} ms`);
  blessedBox.log('Response status codes count:');
  Object.keys(statistics.responseCodes).map((code) => {
    if (code !== 'null') {
      blessedBox.log(`  ${code}: ${statistics.responseCodes[code]} occurences`);
    } else {
      blessedBox.log(`  Without response: ${statistics.responseCodes[code]} occurences`);
    }
  });
  // A last line to add space between different websites statistics
  blessedBox.log('');
}

module.exports = displayStatistics;

