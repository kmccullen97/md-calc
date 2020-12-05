const math = require('mathjs');

const getValueByCell = require('./helpers/get-value-by-cell');
const { convertPositionToCell } = require('./helpers/cell-format-converter');

const matchCellName = /[A-Z][0-9]+/g;

const evaluateCell = (cell, table, prev = null, ref = false) => {
  let cellValue;
  try {
    cellValue = getValueByCell(cell, table);
  } catch (err) {
    return 'REF';
  }

  if (typeof cellValue === 'number') {
    return cellValue;
  }

  if (!Number.isNaN(Number(cellValue))) {
    return parseFloat(cellValue);
  }

  if (cellValue.charAt(0) === '=') {
    const evaluatedCell = cellValue
      .replace(matchCellName, (match) => {
        if (match === cell || match === prev) {
          return 'REF';
        }
        return evaluateCell(match, table, cell, true);
      })
      .replace('=', '');
    if (evaluatedCell.includes('REF')) {
      return 'REF';
    }
    return math.evaluate(evaluatedCell);
  }

  if (ref === true && typeof cellValue === 'string') {
    return 'REF';
  }

  return cellValue;
};

const evaluate = (table) => {
  const updatedTable = table;
  updatedTable.forEach((row, i) => {
    row.forEach((_, j) => {
      const cell = convertPositionToCell(i, j);
      const newValue = evaluateCell(cell, updatedTable);
      updatedTable[i][j] = newValue;
    });
  });
  return updatedTable;
};

module.exports = evaluate;
