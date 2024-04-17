let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const basket = Number(input[0].split(' ')[0]);
const change = Number(input[0].split(' ')[1]);

const array = Array.from({ length: basket }, (_, index) => index + 1);
for (let i = 1; i <= change; i++) {
  const start = Number(input[i].split(' ')[0]);
  const end = Number(input[i].split(' ')[1]);

  const reversedSlice = array.slice(start - 1, end).reverse();
  array.splice(start - 1, end - start + 1, ...reversedSlice);
}

console.log(array.join(' '));