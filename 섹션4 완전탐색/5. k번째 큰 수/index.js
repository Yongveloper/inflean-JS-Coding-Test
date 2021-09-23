function solution(n, k, card) {
  let answer = 0;

  const temp = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let s = j + 1; s < n; s++) {
        temp.push(card[i] + card[j] + card[s]);
      }
    }
  }

  temp.sort((a, b) => b - a);
  console.log(temp);
  answer = temp[k - 1];

  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
