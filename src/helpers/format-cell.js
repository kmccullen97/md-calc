const formatCell = (cellValue, formats) => {
  let formattedCellValue = cellValue;

  if (formats.decimal && formats.format !== 'P') {
    formattedCellValue = cellValue.toFixed(formats.decimal);
  }

  if (formats.format) {
    switch (formats.format) {
      case 'C':
        formattedCellValue = formattedCellValue.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        });
        break;
      case 'P': {
        let percent = formattedCellValue * 100;
        if (formats.decimal) {
          percent = percent.toFixed(formats.decimal);
        }
        formattedCellValue = `${percent}%`;
        break;
      }
      default:
        break;
    }
  }

  return formattedCellValue;
};

module.exports = formatCell;
