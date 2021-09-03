function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  const arrLength = arr.length;

  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < arrLength; i++) {
    sum1 = 0;
    sum2 = 0;
    for (let j = 0; j < arrLength; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }

  sum1 = 0;
  sum2 = 0;

  for (let i = 0; i < arrLength; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][arrLength - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
