let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
const first = Number(input[0].split('').reverse().join(''));
const second = Number(input[1].split('').reverse().join(''));

if (first > second) {
  console.log(first);
} else {
  console.log(second);
}