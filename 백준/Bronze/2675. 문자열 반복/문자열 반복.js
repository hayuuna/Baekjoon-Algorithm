let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const num = +input[0];

for (let i = 1; i <= num; i++) {
  let [cnt, str] = input[i].split(' ');

  let answer = str.split('').map((item) => item.repeat(+cnt));
  console.log(answer.join(''));
}