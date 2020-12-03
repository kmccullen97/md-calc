const { expect } = require("chai");

const parser = require("./parser");

const exOne = `mdCalc
| Calc Table |        |
| ---------- | -----: |
| Line 1     |   1000 |
| Line 2     |    200 |
| Total      | =B1+B2 |`;

const exOneResponse = {
  head: [
    ["Calc Table", ""],
    ["----------", "-----:"],
  ],
  data: [
    ["Line 1", "1000"],
    ["Line 2", "200"],
    ["Total", "=B1+B2"],
  ],
};

describe("parser", () => {
  it("Should return correct object structure", () => {
    const parsed = parser(exOne);
    expect(exOneResponse).to.eql(parsed);
  });
});
