function setUpAlertBox(blessed) {
  // Create an alert box
  const alertBox = blessed.log({
    top: '0%',
    left: '50%',
    valign: 'top',
    align: 'left',
    width: '50%',
    height: '100%',
    content: 'Puppy will display monitoring alerts here\n',
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

