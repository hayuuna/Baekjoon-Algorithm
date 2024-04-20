let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let answer = [];

const num = [1, 1, 2, 2, 2, 8];

for (let i = 0; i < 6; i++) {
  let a = num[i] - Number(input[i]);

  if (a === 0) {
    answer.push(0);
  } else {
    answer.push(a);
  }
}

console.log(answer.join(' '));