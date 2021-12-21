function solution(s, e) {
  const checkArr = Array.from({ length: 10001 }, () => 0);
  const disArr = Array.from({ length: 10001 }, () => 0);
  const queue = [];
  checkArr[s] = 1;
  queue.push(s);
  disArr[s] = 0;

  while (queue.length) {
    const x = queue.shift();
    for (const nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return disArr[x] + 1;
      if (nx > 0 && nx <= 10000 && checkArr[nx] === 0) {
        checkArr[nx] = 1;
        queue.push(nx);
        disArr[nx] = disArr[x] + 1;
      }
    }
  }
}

console.log(solution(8, 3));

// level로 찾는 방법
function solution2(s, e) {
  const ch = Array.from({ length: 10001 }, () => 0);
  const queue = [];
  queue.push(s);
  ch[s] = 1;
  let L = 0;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const x = queue.shift();
      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) return L + 1;
        if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
        }
      }
    }
    L++;
  }
}

console.log(solution2(5, 14));
