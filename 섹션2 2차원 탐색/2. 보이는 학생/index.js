function solution(arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  arr.forEach((num) => {
    if (num > max) {
      answer++;
      max = num;
    }
  });

  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
