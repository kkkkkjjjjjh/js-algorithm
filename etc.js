var fs = require('fs');
var input = fs.readFileSync('etc.txt').toString().split('\n'); // 한줄입력
// var input = fs.readFileSync(("etc.txt").toString().split('\r\n');
// var input = fs.readFileSync(("etc.txt").toString().split(''); // 붙여써있는 Number,String
// var input = fs.readFileSync(("etc.txt").toString().trim(); // 앞뒤공백제거(쇠막대기)
// var input = fs.readFileSync(("etc.txt").toString().split(' '); // 띄어쓰기
// var input = fs.readFileSync(("etc.txt").toString().match(/[^\r\n]+/g); // 테스트케이스없이 두줄있음(스택)
// var input = fs.readFileSync(("etc.txt").toString().match(/[^\r\n]+/g).slice(1); // 테스트케이스와 두줄 있음
// var input = fs.readFileSync(("etc.txt").toString().match(/[^\r\n]+/g).slice(1).slice('\n');
// var input = fs.readFileSync(("etc.txt").toString(); // 텍스트

var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a + b);
