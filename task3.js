// node task.js 3600 3599
// 1 час 59 минут 59 секунд
function pluralize(time, one, more, other) {
    var result;
    var last = +String(time).split('').pop();

    if(last === 1)
        result = one;
    else if(last === 2 || last === 3 || last === 4)
        result = more;
    else
        result = other;

    return result;
}

function output_time(h, min, sec) {
    var result = '';

    if(h !== 0)
        result += h + ' ' + pluralize(h, 'час', 'часа', 'часов');
    if(min !== 0)
        result += ' ' + min + ' ' + pluralize(min, 'минута', 'минуты', 'минут');
    if(sec !== 0)
        result += ' ' + sec + ' ' + pluralize(sec, 'секунда', 'секунды', 'секунд');

    return result.trim();
}

var t1 = +process.argv[2];
var t2 = +process.argv[3];
var t = t1 + t2;
var h = Math.floor(t / 3600);
var min = Math.floor((t / 60) - (h * 60));
var sec = t - (h * 3600) - (min * 60);
console.log(output_time(h, min, sec));