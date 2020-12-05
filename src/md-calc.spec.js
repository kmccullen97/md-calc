const { expect } = require('chai');

const mdCalc = require('./md-calc');

describe('md-calc', () => {
  it('Should work', () => {
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
    expect(mdCalc(md)).to.equal(newMd);
  });

  it('Should work with a mdCalc table at the end of a file', () => {
    const md = `
|Non Calc Table||
|--|--:|
|Line 1|1000|

mdCalc
|Calc Table||
|--|--:|
|Line 1|1000|
|Line 2|200|
|Total|=B1+B2|`;

    const newMd = `
|Non Calc Table||
|--|--:|
|Line 1|1000|

|Calc Table||
|--|--:|
|Line 1|1000|
|Line 2|200|
|Total|1200|`;
    expect(mdCalc(md)).to.equal(newMd);
  });
});
