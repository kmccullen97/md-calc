# Markdown Calc

Markdown calc is the idea to treat markdown tables like an excel workbook.

## Getting Started

- Install the package

  `npm install https://github.com/kmccullen97/md-calc#0.1.0`

  `yarn add https://github.com/kmccullen97/md-calc#0.1.0`

- Setup test project

  index.js

  ```js
  const fs = require("fs");
  const mdCalc = require("md-calc");

  const input = fs.readFileSync("./input.md", "utf-8");

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

  ## mdCalc cant be the end of file (known bug with regex)
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

## Contributing

- Clone the repository
  `git clone https://github.com/kmccullen97/md-calc.git`

- Install packages
  `yarn install`

- Run the tests
  `yarn test` or `yarn test:min`
