function solution(s) {
  let answer = '';
  const filtered = s.toLowerCase().replace(/[^a-z]/g, '');
  const reversed = filtered.split('').reverse().join('');

  if (filtered === reversed) {
    answer = 'YES';
  } else {
    answer = 'NO';
  }

  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
