let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const num = input[1].split('').map((item) => Number(item));

const sum = num.reduce((acc, cur) => acc + cur, 0);
console.log(sum);