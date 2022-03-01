function solution(s) {
  let answer = '';
  let stringHash = new Map();

  for (let x of s) {
    stringHash.set(x, (stringHash.get(x) || 0) + 1);
  }

  const sortByValue = [...stringHash].sort((a, b) => b[1] - a[1]);
  for (const [key, value] of sortByValue) {
    answer += key.repeat(value);
  }

  return answer;
}
console.log(solution('aaAAcccbbbBB'));
