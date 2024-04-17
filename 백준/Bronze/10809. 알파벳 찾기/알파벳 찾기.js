let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let str = input[0].split('');

const alphabet = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));
const array = new Array();

for (let i = 0; i < 26; i++) {
  array.push(str.findIndex((element) => element === alphabet[i]));
}

console.log(array.join(' '));