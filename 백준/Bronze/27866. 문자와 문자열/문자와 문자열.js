let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const str = input[0].split('');
const num = Number(input[1]) - 1;

console.log(str[num]);