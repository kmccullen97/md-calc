const getValueByCell = (cell, table) => {
  if (table === null || table === undefined || table.length < 1) {
    throw new Error("Invalid table");
  }

  if (!cell.match(/^[A-Z][0-9]+/)) {
    throw new Error("Invalid cell");
  }

  const col = cell.charCodeAt(0) - 65;
  const row = parseInt(cell.substr(1, cell.length - 1)) - 1;

  if (row > table.length - 1 || col > table[0].length - 1) {
    throw new Error("Invalid cell location");
  }

  return table[row][col];
};

module.exports = getValueByCell;
