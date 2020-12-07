const parser = require('./parser');
const evaluate = require('./evaluate');
const cellFormatParser = require('./helpers/cell-format-parser');
const formatCell = require('./helpers/format-cell');

const mdCalcRegex = /mdCalc[\s\S]*?(?=$|\n\n)/g;

const getCellFormatting = (data) => {
  const newData = [];
  const formatting = [];

  data.forEach((row) => {
    const newDataRow = [];
    const formattingRow = [];
    row.forEach((cell) => {
      const [newCell, format] = cellFormatParser(cell);
      newDataRow.push(newCell);
      formattingRow.push(format);
    });
    newData.push(newDataRow);
    formatting.push(formattingRow);
  });

  return [newData, formatting];
};

const mdCalc = (text) =>
  text.replace(mdCalcRegex, (match) => {
    const table = parser(match.trim('\n'));
    const [newData, formats] = getCellFormatting(table.data);
    table.data = newData;

    let evaluatedData = evaluate(table.data);
    evaluatedData = evaluatedData.map((row, i) =>
      row.map((cell, j) => formatCell(cell, formats[i][j])));
    table.data = evaluatedData;

    const rows = [...table.head, ...table.data];
    const newMd = rows.map((row) => `|${row.join('|')}|`).join('\n');

    return newMd;
  });

module.exports = mdCalc;
