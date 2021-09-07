function solution(arr) {
  let answer = 0;
  const n = arr.length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const targetNum = arr[i][j];
      let flag = 1;
      for (let k = 0; k < dx.length; k++) {
        const nx = i + dx[k];
        const ny = j + dy[k];
        if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
          const cycleNum = arr[nx][ny];
          if (targetNum <= cycleNum) {
            flag = 0;
            break;
          }
        }
      }
      if (flag) {
        answer++;
      }
    }
  }

  return answer;
}

const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
