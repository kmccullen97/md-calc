const parser = (text) => {
  const updatedText = text.replace('mdCalc\n', '');
  const rows = updatedText.split('\n');
  const table = {
    head: [],
    data: [],
  };

  rows.forEach((row, i) => {
    let cols = row.split('|');
    cols.shift();
    cols.pop();
    cols = cols.map((col) => col.trim());
    const loc = i < 2 ? 'head' : 'data';
    table[loc].push([...cols]);
  });
  return table;
};

module.exports = parser;
