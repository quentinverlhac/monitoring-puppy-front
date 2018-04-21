async function displayStatistics(statistics, blessedBox) {
  // The following lines are used to display readable statistics
  blessedBox.pushLine(`${new Date(statistics.date)} - Statistics of ${statistics.websiteName} for the last ${statistics.duration / 1000} seconds:`);
  // console.group() add indentation
  // console.group();
  blessedBox.pushLine(`Average availability: ${statistics.availability}`);
  blessedBox.pushLine(`Maximum response time: ${statistics.maxResponseTime} ms`);
  blessedBox.pushLine(`Average response time: ${statistics.averageResponseTime} ms`);
  blessedBox.pushLine('Response status codes count:');
  // console.group();
  Object.keys(statistics.responseCodes).map((code) => {
    if (code !== 'null') {
      blessedBox.pushLine(`${code}: ${statistics.responseCodes[code]} occurences`);
    } else {
      blessedBox.pushLine(`Without response: ${statistics.responseCodes[code]} occurences`);
    }
  });
  // console.groupEnd() remove indentation
  // console.groupEnd();
  // console.groupEnd();
  // A last line to add space between different websites statistics
  blessedBox.pushLine('');
}

module.exports = displayStatistics;

