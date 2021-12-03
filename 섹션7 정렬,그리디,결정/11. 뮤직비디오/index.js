function count(songs, capacity) {
  let count = 1;
  let sum = 0;
  songs.forEach((song) => {
    if (sum + song > capacity) {
      count++;
      sum = song;
    } else {
      sum += song;
    }
  });

  return count;
}

function solution(m, songs) {
  let answer = 0;
  let lt = Math.max(...songs);
  let rt = songs.reduce((acc, cur) => acc + cur);

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
