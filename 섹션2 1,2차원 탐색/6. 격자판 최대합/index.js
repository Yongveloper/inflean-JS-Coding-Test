function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  const arrLength = arr.length;

  let sumRow = 0;
  let sumCol = 0;
  let sumCross1 = 0;
  let sumCroos2 = 0;

  for (let i = 0; i < arrLength; i++) {
    sumRow = 0;
    sumCol = 0;
    for (let j = 0; j < arrLength; j++) {
      sumRow += arr[i][j];
      sumCol += arr[j][i];
    }
    sumCross1 += arr[i][i];
    sumCroos2 += arr[i][arrLength - i - 1];
    answer = Math.max(answer, sumRow, sumCol, sumCross1, sumCroos2);
  }

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
