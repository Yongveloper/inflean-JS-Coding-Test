// for loop
function solution(s) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) {
      answer += s[i];
    }
  }

  return answer;
}
console.log(solution('ksekkset'));

// for of & includes
function solution2(string) {
  let answer = '';

  for (const x of string) {
    if (answer.indexOf(x) === -1) {
      answer += x;
    }
  }

  //   for (const x of string) {
  //     if (!answer.includes(x)) {
  //       answer += x;
  //     }
  //   }

  return answer;
}

const str = 'ksekkset';
console.log(solution2(str));
