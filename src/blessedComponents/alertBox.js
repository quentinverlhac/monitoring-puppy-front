function setUpAlertBox(blessed) {
  // Create an alert box
  const alertBox = blessed.log({
    top: '0%',
    left: '50%',
    width: '50%',
    height: '100%',
    style: {
      fg: 'white',
      bg: 'black',
    },
    border: {
      type: 'line',
    },
    tags: true,
    content: 'Puppy will display monitoring alerts here\n',
    scrollable: true,
    scrollbar: {
      ch: ' ',
      inverse: true,
    },
    mouse: true,
    keys: true,
    vi: true,
  });
  return alertBox;
}

module.exports = setUpAlertBox;

