function solution(size, arr) {
  const answer = [];
  arr.forEach((num) => {
    const pos = answer.indexOf(num);
    if (pos !== -1) {
      answer.splice(pos, 1);
      answer.unshift(num);
    } else {
      answer.unshift(num);
      if (answer.length > size) {
        answer.pop();
      }
    }
  });

  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
