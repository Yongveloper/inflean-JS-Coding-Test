// 내가 처음 한 풀이
function solution(arr) {
  let answer = [];
  const odd = arr.filter((number) => number % 2 !== 0);
  const oddSum = odd.reduce((acc, curr) => acc + curr);
  const oddMin = Math.min(...odd);
  answer.push(oddSum);
  answer.push(oddMin);

  return answer;
}

const arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

// forEach
function solution2(arr) {
  let answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;

  arr.forEach((num) => {
    if (num % 2 !== 0) {
      sum += num;
      if (num < min) {
        min = num;
      }
    }
  });

  answer.push(sum);
  answer.push(min);

  return answer;
}
const arr2 = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr2));
