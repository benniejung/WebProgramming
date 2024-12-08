let fs = require('fs');
fs.writeFile('./output.txt', 'Hello, world!\n', function (err) {
    if (err) {
        console.log('Error: ' + err);
    } else {
        console.log('file write success!');
    }
});

console.log('file write reqeust...'); // 먼저 출력