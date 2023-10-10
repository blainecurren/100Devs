let tvShows = ["bachelor", "reno 911", "walking dead"];

tvShows.forEach((show) => console.log(show));

let nums = [21, 34, 23, 45, 22, 88];

let onlyEvens = (arr) => arr.filter((n) => n % 2 === 0);

console.log(onlyEvens(nums));

function sumSecondLowAndHigh() {
  let sorted = arr.sort((a, b) => a - b);

  alert(sorted[1] + sorted[sorted.length - 2]);
}
