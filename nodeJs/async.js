let fs = require('fs');
// read file - 비동기식 IO
let data = fs.readFile('../Current/ex8-03.html', 'utf-8', function (err, data) {
    if (err == null) {
        console.log(data);
    } else {
        console.log('error !!!');
    }
});
console.log('file read request !!!');