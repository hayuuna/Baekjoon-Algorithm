let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  if (input[i].length - 1 === 0) {
    console.log(input[i].repeat(2));
  } else if (input[i].length - 1 === 1) {
    console.log(input[i]);
  } else {
    let last = input[i].length - 1;
    console.log(input[i][0] + input[i][last]);
  }
}