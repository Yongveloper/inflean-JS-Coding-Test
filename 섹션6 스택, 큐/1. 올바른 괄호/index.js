function solution(s) {
  let answer = 'YES';
  const stack = [];

  for (const x of s) {
    if (x === ')' && stack.length === 0) {
      return 'NO';
    }

    if (x === '(') {
      stack.push(x);
    } else {
      stack.pop();
    }
  }

  if (stack.length > 0) {
    return 'NO';
  }

  return answer;
}

let a = '(()(()))(())';
console.log(solution(a));
