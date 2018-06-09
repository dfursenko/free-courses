// node task.js 7 10 2
// 111
var a = process.argv[2];
var b = +process.argv[3];
var c = +process.argv[4];
var result = parseInt(a, b).toString(c);
console.log(result);