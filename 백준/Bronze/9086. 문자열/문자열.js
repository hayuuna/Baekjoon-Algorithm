let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let last = input[i].length - 1;
  console.log(input[i][0] + input[i][last]);
}
