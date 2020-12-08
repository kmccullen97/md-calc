const { expect } = require('chai');

const cellFormatParser = require('./cell-format-parser');

describe('helpers/cell-format-parser', () => {
  it('should return currency format', () => {
    expect(cellFormatParser('[C]=1154.56')).to.eql([
      '=1154.56',
      { format: 'C' },
    ]);
  });

  it('should return percent format', () => {
    expect(cellFormatParser('[P]=1154.56')).to.eql([
      '=1154.56',
      { format: 'P' },
    ]);
  });

  it('should return decimal value', () => {
    expect(cellFormatParser('{3}=1154.56')).to.eql([
      '=1154.56',
      { decimal: 3 },
    ]);
  });

  it('should return no formatting', () => {
    expect(cellFormatParser('=A1')).to.eql(['=A1', {}]);
    expect(cellFormatParser('[]=A1')).to.eql(['=A1', {}]);
    expect(cellFormatParser('{}=A1')).to.eql(['=A1', {}]);
    expect(cellFormatParser('{}[]=A1')).to.eql(['=A1', {}]);
    expect(cellFormatParser('=A1[C]{2}')).to.eql(['=A1[C]{2}', {}]);
  });
});
