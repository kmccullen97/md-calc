# Markdown Calc

Markdown calc is the idea to treat markdown tables like an excel workbook.

## Getting Started

- Install the package

  `npm install md-calc` or `yarn add md-calc`

- Setup test project

  index.js

  ```js
  const fs = require('fs');
  const mdCalc = require('md-calc');

  const input = fs.readFileSync('./input.md', 'utf-8');

  const output = mdCalc(input);

  console.log(output);
  ```

  input.md

  ```md
  mdCalc
  | Markdown Calc |        |
  | ------------- | ------ |
  | Jan           | 100    |
  | Feb           | 350    |
  | Total         | =B1+B2 |
  ```

- Run the code
  `node index.js`

  Output

  ```md
  | Markdown Calc |     |
  | ------------- | --- |
  | Jan           | 100 |
  | Feb           | 350 |
  | Total         | 450 |
  ```

  `!REF` will display in a cell if the reference is invalid.

## Features

- **Basic Math**
  - all calculations are evaluated with math.js
  - `=1.2 * (2 + 4.5)`
  - `=sin(45 deg) ^ 2`
- **Cell Reference**
  - `=A1`
  - `=(A2+B3)/D2`
- **Formatting**
  - Currency: `[C]=1156.54` -> `$1,156.54`
  - Percent: `[P]=0.5` -> `50%`
  - Decimal: `{2}=0.4313` -> `0.43`
  - Multiple: `[P]{1}=0.453678` -> `45.4%`

## Contributing

Have a feature request or find a bug? Feel free to create a issue or pull request.

### Running the code

- Clone the repository
  `git clone https://github.com/kmccullen97/md-calc.git`

- Checkout develop branch
  `git checkout -b develop origin/develop`

- Install packages
  `yarn install`

- Run the tests
  `yarn test` or `yarn test:min`
