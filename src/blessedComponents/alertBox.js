function setUpAlertBox(blessed) {
  // Create an alert box
  const alertBox = blessed.box({
    top: '0%',
    left: '50%',
    valign: 'top',
    align: 'left',
    width: '50%',
    height: '100%',
    content: 'Hello {bold}world{/bold}!',
    tags: true,
    scrollable: true,
    border: {
      type: 'line',
    },
    style: {
      fg: 'white',
      bg: 'black',
    },
  });
  return alertBox;
}

module.exports = setUpAlertBox;

