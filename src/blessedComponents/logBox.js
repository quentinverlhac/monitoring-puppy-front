function setUpLogBox(blessed) {
  // Create a log box
  const logBox = blessed.log({
    top: '0%',
    left: '0%',
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
    content: 'Puppy will display monitoring statistics here\n',
    scrollable: true,
    scrollbar: {
      ch: ' ',
      inverse: true,
    },
    mouse: true,
    keys: true,
    vi: true,
  });
  return logBox;
}

module.exports = setUpLogBox;

