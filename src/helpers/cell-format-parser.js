const generalRegex = /[{}[\]0-9CP]+?(?==)/g;
const decimalRegex = /{([0-9]+?)}/g;
const formatRegex = /\[([CP]+?)\]/g;

const cellFormatParser = (cellValue) => {
  const formatSettings = {};
  const remainingCellValue = cellValue.replace(generalRegex, '');

  const match = cellValue.match(generalRegex);
  if (!match) {
    return [remainingCellValue, {}];
  }

  const formatText = match[0];

  const decimalMatch = formatText.match(decimalRegex);
  if (decimalMatch) {
    formatSettings.decimal = parseInt(decimalMatch[0].replace(/{|}/g, ''), 10);
  }

  const formatMatch = formatText.match(formatRegex);
  if (formatMatch) {
    formatSettings.format = formatMatch[0].replace(/\[|\]/g, '');
  }

  return [remainingCellValue, formatSettings];
};

module.exports = cellFormatParser;
