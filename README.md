# Markdown Calc

Markdown calc is the idea to treat markdown tables like an excel workbook.

## Example

Input

```
mdCalc
| Calc Table |        |
| ---------- | -----: |
| Line 1     |   1000 |
| Line 2     |    200 |
| Total      | =B1+B2 |
```

Output

| Calc Table |      |
| ---------- | ---: |
| Line 1     | 1000 |
| Line 2     |  200 |
| Total      | 1200 |

## Getting Started

- Clone the repository
  `git clone https://github.com/kmccullen97/md-calc.git`

- Install packages
  `yarn install`

- Run the tests
  `yarn test` or `yarn test:min`
