let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
const star = '*';
const blank = ' ';

for (let i = 1; i <= input; i++) {
  console.log(blank.repeat(input - i) + star.repeat(i + i - 1));
}

for (let j = input - 1; j > 0; j--) {
  console.log(blank.repeat(input - j) + star.repeat(j + j - 1));
}
