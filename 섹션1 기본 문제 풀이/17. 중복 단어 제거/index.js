// inlucdes
function solution(s) {
  let answer = [];

  s.forEach((string) => {
    if (!answer.includes(string)) {
      answer.push(string);
    }
  });

  return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));

// indexOf
function solution2(s) {
  let answer = [];

  answer = s.filter((string, index) => s.indexOf(string) === index);

  return answer;
}
let str2 = ['good', 'time', 'good', 'time', 'student'];
console.log(solution2(str2));
