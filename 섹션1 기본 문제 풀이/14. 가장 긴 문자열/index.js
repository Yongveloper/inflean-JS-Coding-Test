function solution(s) {
  let answer = '';

  s.forEach((string) => {
    if (string.length > answer.length) {
      answer = string;
    }
  });

  return answer;
}
let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
