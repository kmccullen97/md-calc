const parser = require('./parser');
const evaluate = require('./evaluate');

const mdCalcRegex = /mdCalc[\s\S]*?(?=$|\n\n)/g;

const mdCalc = (text) =>
  text.replace(mdCalcRegex, (match) => {
    const table = parser(match.trim('\n'));

    const evaluatedData = evaluate(table.data);
    table.data = evaluatedData;
    const rows = [...table.head, ...table.data];

    const newMd = rows.map((row) => `|${row.join('|')}|`).join('\n');

    return newMd;
  });

module.exports = mdCalc;
