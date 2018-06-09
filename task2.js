// node task.js 4 июля 2018
// 180
months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
var d = +process.argv[2];
var m =  process.argv[3];
var y = +process.argv[4];
var new_year = new Date("January 1 " + (y + 1) );
var input_day = new Date( (months.indexOf(m) + 1) + "/" + d + "/" + y);
var next_day = new Date(input_day);
    next_day.setDate(input_day.getDate() + 1);
var remaining = (new_year - next_day) / (24*60*60*1000);
console.log(remaining);