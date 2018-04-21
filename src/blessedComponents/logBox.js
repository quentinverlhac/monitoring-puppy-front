function setUpLogBox(blessed) {
  // Create a log box
  const logBox = blessed.log({
    top: '0%',
    left: '0%',
    valign: 'top',
    align: 'left',
    width: '50%',
    height: '100%',
    content: 'Puppy will display monitoring statistics here\n',
    tags: true,
    scrollable: true,
    border: {
      type: 'line',
    },
    style: {
      fg: 'white',
      bg: 'black',
      scrollbar: {
        bg: 'white',
      },
    },
  });
  return logBox;
}

module.exports = setUpLogBox;

