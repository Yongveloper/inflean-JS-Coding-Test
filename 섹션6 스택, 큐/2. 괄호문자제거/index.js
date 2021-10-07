function solution(s) {
  let answer = '';
  const stack = [];

  for (const x of s) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else {
      stack.push(x);
    }
  }

  answer = stack.join('');

  return answer;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
