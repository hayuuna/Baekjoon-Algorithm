let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('');
const string = input.join('');
const reverseString = input.reverse().join('');
console.log(string === reverseString ? 1 : 0);