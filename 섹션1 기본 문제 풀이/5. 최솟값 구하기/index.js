// for loop
function solution(arr) {
  let answer = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  answer = min;

  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

// forEach
function solution2(arr) {
  let answer = 0;
  let min = Number.MAX_SAFE_INTEGER;

  arr.forEach((num) => {
    if (num < min) {
      min = num;
    }
  });
  answer = min;

  return answer;
}

let arr2 = [5, 7, 4, 3, 2, 9, 11];
console.log(solution(arr2));
