function solution(s) {
  let answer = '';

  for (const x of s) {
    const Upper = x.toUpperCase();
    if (x === Upper) {
      answer += x;
    } else {
      answer += Upper;
    }
  }

  return answer;
}

let str = 'ItisTimeToStudy';
console.log(solution(str));
