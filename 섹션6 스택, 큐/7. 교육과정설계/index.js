function solution(need, plan) {
  let answer = 'YES';
  const queue = need.split('');

  for (const x of plan) {
    if (queue.includes(x) && x !== queue.shift()) {
      return 'NO';
    }
  }

  if (queue.length > 0) {
    return 'NO';
  }

  return answer;
}

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));
