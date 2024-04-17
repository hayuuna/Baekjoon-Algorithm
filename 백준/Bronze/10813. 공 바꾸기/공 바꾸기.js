let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const basket = Number(input[0].split(' ')[0]);
const change = Number(input[0].split(' ')[1]);

const array = Array.from({ length: basket }, (_, index) => index + 1);

for (let i = 1; i <= change; i++) {
  let num1 = Number(input[i].split(' ')[0]) - 1;
  let num2 = Number(input[i].split(' ')[1]) - 1;
  let temp = array[num1];
  array[num1] = array[num2];
  array[num2] = temp;
}

console.log(array.join(' '));