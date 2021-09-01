function solution(s) {
  let answer = '';

  for (const x of s) {
    const upper = x.toUpperCase();
    const lower = x.toLowerCase();
    if (x === upper) {
      answer += lower;
    } else {
      answer += upper;
    }
  }

  return answer;
}

console.log(solution('StuDY'));
