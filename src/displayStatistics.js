async function displayStatistics(statistics) {
  // The following lines are used to display readable statistics
  console.log(`${new Date(statistics.date)} - Statistics of ${statistics.websiteName} for the last ${statistics.duration / 1000} seconds:`);
  // console.group() add indentation
  console.group();
  console.log(`Average availability: ${statistics.availability}`);
  console.log(`Maximum response time: ${statistics.maxResponseTime} ms`);
  console.log(`Average response time: ${statistics.averageResponseTime} ms`);
  console.log('Response status codes count:');
  console.group();
  Object.keys(statistics.responseCodes).map((code) => {
    if (code !== 'null') {
      console.log(`${code}: ${statistics.responseCodes[code]} occurences`);
    } else {
      console.log(`Without response: ${statistics.responseCodes[code]} occurences`);
    }
  });
  // console.groupEnd() remove indentation
  console.groupEnd();
  console.groupEnd();
  // A last line to add space between different websites statistics
  console.log('');
}

module.exports = displayStatistics;

