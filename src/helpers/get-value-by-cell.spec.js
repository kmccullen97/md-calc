const { expect } = require("chai");

const getValueByCell = require("./get-value-by-cell");

const table = [
  ["10", "23", "=A1+B1"],
  ["37", "5", "=A2+B2"],
];

describe("helpers/getValueByCell", () => {
  it("should work", () => {
    expect("10").to.eql(getValueByCell("A1", table));
  });

  it("should work", () => {
    expect("23").to.eql(getValueByCell("B1", table));
  });

  it("should work", () => {
    expect("=A1+B1").to.eql(getValueByCell("C1", table));
  });

  it("should work", () => {
    expect("37").to.eql(getValueByCell("A2", table));
  });

  it("should work", () => {
    expect("5").to.eql(getValueByCell("B2", table));
  });

  it("should work", () => {
    expect("=A2+B2").to.eql(getValueByCell("C2", table));
  });

  it("should not work if table is null", () => {
    expect(() => getValueByCell("", null)).to.throw("Invalid table");
  });

  it("should not work if table is undefined", () => {
    expect(() => getValueByCell("", undefined)).to.throw("Invalid table");
  });

  it("should not work if table is empty", () => {
    expect(() => getValueByCell("", [])).to.throw("Invalid table");
  });

  it("should not work if cell is blank", () => {
    expect(() => getValueByCell("", table)).to.throw("Invalid cell");
  });

  it("should not work if cell is blank", () => {
    expect(() => getValueByCell("A", table)).to.throw("Invalid cell");
  });

  it("should not work if cell has too many letters", () => {
    expect(() => getValueByCell("AA12", table)).to.throw("Invalid cell");
  });

  it("should not work if cell has lower case column", () => {
    expect(() => getValueByCell("z12", table)).to.throw("Invalid cell");
  });

  it("should not work if cell column isn't in the table", () => {
    expect(() => getValueByCell("D2", table)).to.throw("Invalid cell location");
  });

  it("should not work if cell row isn't in the table", () => {
    expect(() => getValueByCell("A3", table).to.throw("Invalid cell location"));
  });
});
