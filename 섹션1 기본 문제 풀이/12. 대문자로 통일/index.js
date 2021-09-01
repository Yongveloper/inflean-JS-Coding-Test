function solution(s) {
  let answer = '';

  for (const x of s) {
    const upper = x.toUpperCase();
    if (x === upper) {
      answer += x;
    } else {
      answer += upper;
    }
  }

  return answer;
}

let str = 'ItisTimeToStudy';
console.log(solution(str));
