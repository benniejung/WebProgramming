// 워커에서 메시지 수신
onmessage = function (e) {
    const numbers = e.data; // 메인 스레드에서 전달받은 데이터 (배열)
    const result = numbers[0] * numbers[1]; // 두 숫자의 곱
    postMessage(result); // 계산 결과를 메인 스레드로 전송
};