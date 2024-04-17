let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const num = Number(input[0]);
const score = input[1]
  .split(' ')
  .map((item) => Number(item))
  .sort((a, b) => b - a);

const max = score[0];

let sum = 0;

for (let i = 0; i < num; i++) {
  sum += (score[i] / max) * 100;
}

console.log(sum / num);