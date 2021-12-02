function solution(meeting) {
  let answer = 0;
  meeting = meeting.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  let et = 0;
  meeting.forEach((time) => {
    if (time[0] >= et) {
      answer++;
      et = time[1];
    }
  });

  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
