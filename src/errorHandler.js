function handleError(err) {
  if (err.response) {
    // If there is a response in the error, display its content
    console.error(err.response.data);
  } else {
    // The monitoring server is unreachable
    console.error('Error: no response from monitoring server');
  }
}

module.exports = handleError;

