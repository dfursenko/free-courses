// node task.js 4 июля 2018
// 180
months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
var d = +process.argv[2];
var m =  process.argv[3];
var y = +process.argv[4];
var new_year = new Date("Dec 31 " + y);
var input_day = new Date( (months.indexOf(m) + 1) + "/" + d + "/" + y);
var remaining = (new_year - input_day) / (24*60*60*1000);
console.log(remaining);