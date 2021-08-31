function solution(s, t) {
  let answer = 0;

  for (const x of s) {
    if (x === t) {
      answer++;
    }
  }

  return answer;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));

function solution2(s, t) {
  let answer = s.split('R').length - 1;

  return answer;
}

let str2 = 'COMPUTERPROGRAMMING';
console.log(solution2(str, 'R'));
