const { assert } = require("chai");

const mdCalc = require("./md-calc");

const mdText = `
mdCalc
|Calc Table||
|--|--:|
|Line 1|=1000|
|Line 2|=200|
|Total|=B1+B2|

|Non Calc Table||
|--|--:|
|Line 1|1000|

mdCalc
|Calc Table||
|--|--:|
|Line 1|=1000|

|Non Calc Table||
|--|--:|
|Line 1|1000|
`;

describe("md-calc", () => {
  it("Should run", () => {
    mdCalc(mdText);
  });
});
