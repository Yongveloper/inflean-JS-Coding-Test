function solution(day, arr) {
  let answer = 0;

  arr.forEach((number) => {
    const units = number % 10;
    if (units === day) {
      answer++;
    }
  });

  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
