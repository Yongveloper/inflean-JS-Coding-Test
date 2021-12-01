function solution(arr) {
  let answer = [];
  const sortArr = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) {
      answer.push(i + 1);
    }
  }

  return answer;
}

let arr = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));
