function solution(s) {
  let answer = '';
  const length = s.length;
  const mid = Math.floor(length / 2);
  const mod = length % 2;

  if (mod === 0) {
    answer = s.substr(mid - 1, 2);
    // answer = s.substring(mid - 1, mid + 1);
  } else {
    answer = s.substr(mid, 1);
    // answer = s.substring(mid, mid + 1);
  }

  return answer;
}
console.log(solution('study'));
