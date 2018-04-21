function setUpLogBox(blessed) {
  // Create a log box
  const logBox = blessed.box({
    top: '0%',
    left: '0%',
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
      scrollbar: {
        bg: 'white',
      },
    },
  });
  return logBox;
}

module.exports = setUpLogBox;
