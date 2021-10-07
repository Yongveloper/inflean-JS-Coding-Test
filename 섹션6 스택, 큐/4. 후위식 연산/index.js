function solution(s) {
  let answer;
  const stack = [];

  for (const x of s) {
    let n1 = 0;
    let n2 = 0;
    if (!isNaN(x)) {
      stack.push(Number(x));
    } else {
      n1 = stack.pop();
      n2 = stack.pop();
      if (x === '+') {
        stack.push(n2 + n1);
      } else if (x === '*') {
        stack.push(n2 * n1);
      } else if (x === '/') {
        stack.push(n2 / n1);
      } else {
        stack.push(n2 - n1);
      }
    }
  }

  answer = stack.pop();

  return answer;
}

let str = '352+*9-';
console.log(solution(str));
