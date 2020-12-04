const math = require("mathjs");

const getValueByCell = require("./helpers/get-value-by-cell");
const { convertPositionToCell } = require("./helpers/cell-format-converter");

const matchCellName = /[A-Z][0-9]+/g;

const evaluateCell = (cell, table, prev = null) => {
  var cellValue;
  try {
    cellValue = getValueByCell(cell, table);
  } catch (err) {
    return "REF";
  }

  if (typeof cellValue === "number") {
    return cellValue;
  } else if (!isNaN(cellValue)) {
    return parseFloat(cellValue);
  } else if (cellValue.charAt(0) === "=") {
    var evaluatedCell = cellValue
      .replace(matchCellName, (match) => {
        if (match === cell || match == prev) {
          return "REF";
        }
        return evaluateCell(match, table, cell);
      })
      .replace("=", "");
    if (evaluatedCell.includes("REF")) {
      return "REF";
    }
    return math.evaluate(evaluatedCell);
  } else {
    return cellValue;
  }
};

const evaluate = (table) => {
  table.forEach((row, i) => {
    row.forEach((_, j) => {
      const cell = convertPositionToCell(i, j);
      const newValue = evaluateCell(cell, table);
      table[i][j] = newValue;
    });
  });
  return table;
};

module.exports = evaluate;
