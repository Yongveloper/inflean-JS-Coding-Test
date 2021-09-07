// for loop
function solution(arr) {
  let answer = [];

  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));

// reduce
function solution2(arr) {
  let answer = [];

  arr.reduce((acc, curr) => {
    if (curr > acc) {
      answer.push(curr);
    }
    return curr;
  }, 0);

  return answer;
}

let arr2 = [7, 3, 9, 5, 6, 12];
console.log(solution2(arr2));
