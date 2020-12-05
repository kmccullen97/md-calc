const { convertCellToPosition } = require('./cell-format-converter');

const getValueByCell = (cell, table) => {
  if (table === null || table === undefined || table.length < 1) {
    throw new Error('Invalid table');
  }

  if (!cell.match(/^[A-Z][0-9]+/)) {
    throw new Error('Invalid cell');
  }

  const [row, col] = convertCellToPosition(cell);

  if (row > table.length - 1 || col > table[0].length - 1) {
    throw new Error('Invalid cell location');
  }

  return table[row][col];
};

module.exports = getValueByCell;
