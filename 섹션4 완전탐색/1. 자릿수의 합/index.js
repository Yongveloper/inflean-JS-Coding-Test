function solution(n, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  arr.forEach((number) => {
    const sum = number
      .toString()
      .split('')
      .reduce((acu, cur) => acu + Number(cur), 0);
    // let sum = 0,
    //   tmp = number;
    // while (tmp) {
    //   sum += tmp % 10;
    //   tmp = Math.floor(tmp / 10);
    // }
    if (sum > max) {
      max = sum;
      answer = number;
    } else if (sum === max) {
      if (number > answer) {
        answer = number;
      }
    }
  });

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
