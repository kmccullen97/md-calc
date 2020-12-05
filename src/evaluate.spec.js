const { expect } = require('chai');

const evaluate = require('./evaluate');

describe('evaluate', () => {
  it('should work', () => {
    const table = [
      ['10', '23', '=A1+B1'],
      ['37', '5', '=A2+B2'],
    ];

    const solved = [
      [10, 23, 33],
      [37, 5, 42],
    ];

    expect(evaluate(table)).to.eql(solved);
  });

  it('should work with table cells that are strings', () => {
    const table = [
      ['Line 1', '1000'],
      ['Line 2', '200'],
      ['Total', '=B1+B2'],
    ];

    const solved = [
      ['Line 1', 1000],
      ['Line 2', 200],
      ['Total', 1200],
    ];

    expect(evaluate(table)).to.eql(solved);
  });

  it('should show REF for invalid row', () => {
    const table = [
      ['Line 1', '1000'],
      ['Line 2', '200'],
      ['Total', '=B5+B2'],
    ];

    const solved = [
      ['Line 1', 1000],
      ['Line 2', 200],
      ['Total', 'REF'],
    ];

    expect(evaluate(table)).to.eql(solved);
  });

  it('should show REF for invalid col', () => {
    const table = [
      ['Line 1', '1000'],
      ['Line 2', '200'],
      ['Total', '=C1+B2'],
    ];

    const solved = [
      ['Line 1', 1000],
      ['Line 2', 200],
      ['Total', 'REF'],
    ];

    expect(evaluate(table)).to.eql(solved);
  });

  it('should work for floats', () => {
    const table = [
      ['Line 1', '1000.5'],
      ['Line 2', '200.34'],
      ['Total', '=B1+B2'],
    ];

    const solved = [
      ['Line 1', 1000.5],
      ['Line 2', 200.34],
      ['Total', 1200.84],
    ];

    expect(evaluate(table)).to.eql(solved);
  });

  it('should work with inline calculations', () => {
    const table = [
      ['Line 1', '=35/10'],
      ['Line 2', '=10*3'],
      ['Total', '=B1+B2'],
    ];

    const solved = [
      ['Line 1', 3.5],
      ['Line 2', 30],
      ['Total', 33.5],
    ];

    expect(evaluate(table)).to.eql(solved);
  });

  it('should show REF with self reference', () => {
    const table = [
      ['Line 1', '=B1'],
      ['Line 2', '10'],
      ['Total', '10'],
    ];

    const solved = [
      ['Line 1', 'REF'],
      ['Line 2', 10],
      ['Total', 10],
    ];

    expect(evaluate(table)).to.eql(solved);
  });

  it('should show REF with cross reference', () => {
    const table = [
      ['Line 1', '=B2'],
      ['Line 2', '=B1'],
      ['Total', '10'],
    ];

    const solved = [
      ['Line 1', 'REF'],
      ['Line 2', 'REF'],
      ['Total', 10],
    ];

    expect(evaluate(table)).to.eql(solved);
  });

  it('should work with top to bottom reference', () => {
    const table = [
      ['Line 1', '10'],
      ['Line 2', '=B1'],
      ['Total', '=B2'],
    ];

    const solved = [
      ['Line 1', 10],
      ['Line 2', 10],
      ['Total', 10],
    ];

    expect(evaluate(table)).to.eql(solved);
  });

  it('should work with bottom to top reference', () => {
    const table = [
      ['Line 1', '=B2'],
      ['Line 2', '=B3'],
      ['Total', '10'],
    ];

    const solved = [
      ['Line 1', 10],
      ['Line 2', 10],
      ['Total', 10],
    ];

    expect(evaluate(table)).to.eql(solved);
  });

  it('should show ref when user references a text cell', () => {
    const table = [['Text', '=A1']];

    const solved = [['Text', 'REF']];

    expect(evaluate(table)).to.eql(solved);
  });
});
