// 점수를 기반으로 학점 계산 함수
function calculateGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

// 워커에서 메시지 수신
onmessage = function (e) {
    const score = e.data; // 메인 스레드로부터 받은 점수
    const grade = calculateGrade(score); // 학점 계산
    postMessage(score + "=" + grade); // 학점을 메인 스레드로 전송
};