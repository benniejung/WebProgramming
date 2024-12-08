let fs = require('fs');

try {
    // 동기식으로 파일 읽기
    let data = fs.readFileSync('../Current/ex8-03.html', 'utf-8');
    console.log(data);
} catch (err) {
    // 에러 처리
    console.error('파일 읽기 중 에러 발생:', err.message);
}

console.log('file read request !!!');
