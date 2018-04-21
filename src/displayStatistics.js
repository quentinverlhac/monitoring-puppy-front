async function displayStatistics(statistics, blessedBox) {
  // The following lines are used to display readable statistics
  blessedBox.pushLine(`${new Date(statistics.date)}`);
  blessedBox.pushLine(`Statistics of ${statistics.websiteName} for the last ${statistics.duration / 1000} seconds:`);
  blessedBox.pushLine(`Average availability: ${statistics.availability}`);
  blessedBox.pushLine(`Maximum response time: ${statistics.maxResponseTime} ms`);
  blessedBox.pushLine(`Average response time: ${statistics.averageResponseTime} ms`);
  blessedBox.pushLine('Response status codes count:');
  Object.keys(statistics.responseCodes).map((code) => {
    if (code !== 'null') {
      blessedBox.pushLine(`{right}${code}: ${statistics.responseCodes[code]} occurences{/right}`);
    } else {
      blessedBox.pushLine(`{right}Without response: ${statistics.responseCodes[code]} occurences{/right}`);
    }
  });
  // A last line to add space between different websites statistics
  blessedBox.pushLine('');
}

module.exports = displayStatistics;

