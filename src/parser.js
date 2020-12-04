const parser = (text) => {
  text = text.replace("mdCalc\n", "");
  const rows = text.split("\n");
  const table = {
    head: [],
    data: [],
  };

  rows.forEach((row, i) => {
    var cols = row.split("|");
    cols.shift();
    cols.pop();
    cols = cols.map((col) => col.trim());
    const loc = i < 2 ? "head" : "data";
    table[loc].push([...cols]);
  });
  return table;
};

module.exports = parser;
