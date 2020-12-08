const { expect } = require('chai');

const formatCell = require('./format-cell');

describe('helpers/format-cell', () => {
  it('should work when formatting a decimal', () => {
    expect(formatCell(10 / 3, { decimal: 2 })).to.equal('3.33');
    expect(formatCell(1.25, { decimal: 1 })).to.equal('1.3');
  });

  it('should work when formatting a percent', () => {
    expect(formatCell(0.5, { format: 'P' })).to.equal('50%');
  });

  it('should work when formatting a decimal with percent', () => {
    expect(formatCell(0.5, { decimal: 2, format: 'P' })).to.equal('50.00%');
    expect(formatCell(0.2641, { decimal: 1, format: 'P' })).to.equal('26.4%');
  });

  it('should work when formatting a currency', () => {
    expect(formatCell(1156.54, { format: 'C' })).to.equal('$1,156.54');
    expect(formatCell(1000156.54, { format: 'C' })).to.equal('$1,000,156.54');
    expect(formatCell(1156.54452, { format: 'C' })).to.equal('$1,156.54');
  });
});
