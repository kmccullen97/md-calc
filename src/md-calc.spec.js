const { expect } = require("chai");

const mdCalc = require("./md-calc");

const md = `
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

const newMd = `
|Calc Table||
|--|--:|
|Line 1|1000|
|Line 2|200|
|Total|1200|

|Non Calc Table||
|--|--:|
|Line 1|1000|

|Calc Table||
|--|--:|
|Line 1|1000|

|Non Calc Table||
|--|--:|
|Line 1|1000|
`;

describe("md-calc", () => {
  it("Should run", () => {
    expect(mdCalc(md)).to.equal(newMd);
  });
});
