function solution(s) {
  let answer = '';
  let cnt = 1;
  const newStr = s + ' ';

  for (let i = 0; i < s.length; i++) {
    if (newStr[i] === newStr[i + 1]) {
      cnt++;
    } else {
      answer += newStr[i];
      if (cnt > 1) {
        answer += String(cnt);
      }
      cnt = 1;
    }
  }

  return answer;
}

let str = 'KKHSSSSSSSE';
console.log(solution(str));
