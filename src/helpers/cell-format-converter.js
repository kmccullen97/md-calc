const convertPositionToCell = (row, col) =>
  String.fromCharCode(col + 65).toString() + (row + 1).toString();

const convertCellToPosition = (cell) => {
  const col = cell.charCodeAt(0) - 65;
  const row = parseInt(cell.substr(1, cell.length - 1), 10) - 1;
  return [row, col];
};

module.exports = {
  convertPositionToCell,
  convertCellToPosition,
};
