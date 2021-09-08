// reverse
function solution(s) {
  let answer = '';
  const uppered = s.toUpperCase();
  const reversed = uppered.split('').reverse().join('');

  if (uppered === reversed) {
    answer = 'YES';
  } else {
    answer = 'NO';
  }

  return answer;
}

let str = 'goooG';
console.log(solution(str));

// for loop
function solution2(s) {
  let answer = 'YES';
  const uppered = s.toUpperCase();
  const length = s.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (uppered[i] !== uppered[length - i - 1]) {
      answer = 'NO';
      break;
    }
  }

  return answer;
}

let str2 = 'goooG';
console.log(solution2(str2));
