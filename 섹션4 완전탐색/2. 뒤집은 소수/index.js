function solution(arr) {
  let answer = [];

  function isPrime(num) {
    if (num === 1) return false;

    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }

    // for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    //   if (num % i === 0) return false;
    // }

    return true;
  }

  arr.forEach((num) => {
    const reversedNum = Number(num.toString().split('').reverse().join(''));
    // let res = 0;
    // while(num){
    //     let t=num%10;
    //     res=res*10+t;
    //     num=parseInt(num/10);
    // }
    if (isPrime(reversedNum)) {
      answer.push(reversedNum);
    }
  });

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
