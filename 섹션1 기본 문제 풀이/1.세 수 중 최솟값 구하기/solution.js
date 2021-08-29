// for loop
function solution(a, b, c) {
  let answer = 0;
  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }

  if (c < answer) {
    answer = c;
  }

  return answer;
}

console.log(solution(2, 5, 1));

// Math.min
function solution2(a, b, c) {
  let answer = Math.min(a, b, c);
  return answer;
}

console.log(solution2(2, 5, 1));
