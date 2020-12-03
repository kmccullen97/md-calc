const mdCalcRegex = /mdCalc[\s\S]*?(?=\n\n)/g;

const mdCalc = (text) => {
  return text.replace(mdCalcRegex, (match) => {
    const table = match.replace("mdCalc\n", "");
    return table;
  });
};

module.exports = mdCalc;
