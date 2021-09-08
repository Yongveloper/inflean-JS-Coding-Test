// 정규식
function solution(str) {
  let answer = 0;
  const filtered = str.replace(/[^0-9]/g, '');

  answer = Number(filtered);

  return answer;
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));

// for loop
function solution2(str) {
  let answer = '';

  for (const x of str) {
    if (!isNaN(x)) {
      answer += x;
    }
  }

  return Number(answer);
}

let str2 = 'g0en2T0s8eSoft';
console.log(solution2(str2));
