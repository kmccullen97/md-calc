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

  it('Should work with a mdCalc table at the end of a file with new line', () => {
    const md = `
|Non Calc Table||
|--|--:|
|Line 1|1000|

mdCalc
|Calc Table||
|--|--:|
|Line 1|1000|
|Line 2|200|
|Total|=B1+B2|
`;

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

  it('Should work with cell formatting', () => {
    const md = `
mdCalc
|Home Valuation||
|-|-|
|Land Value|[C]=14567.89|
|Home Value|[C]=39432.11|
|Current Value|[C]=B1+B2|
|Purchase Price|[C]=100000|
|Hove Value %|[P]{2}=B2/B3|
|Home Value|[C]=B4*B5|
|Land Value|[C]=B4*(1-B5)|
|Yearly Deduction|[C]=B6/27.5|`;

    const newMd = `
|Home Valuation||
|-|-|
|Land Value|$14,567.89|
|Home Value|$39,432.11|
|Current Value|$54,000.00|
|Purchase Price|$100,000.00|
|Hove Value %|73.02%|
|Home Value|$73,022.43|
|Land Value|$26,977.57|
|Yearly Deduction|$2,655.36|`;
    expect(mdCalc(md)).to.equal(newMd);
  });
});
