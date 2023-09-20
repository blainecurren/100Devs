//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ["bachelor", "reno 911", "walking dead"];

tvShows.forEach((show) => console.log(show));

//Create and array of numbers
let nums = ["1", "2", "3", "4", "5"];
//Return a new array of numbers that includes every even number from the previous Arrays
let onlyEvens = (arr) => arr.filter((n) => n % 2 === 0); // filter runs through the array once for each element in the array and creates a new array

console.log(onlyEvens(nums));

//Create a function that takes in an array of numbers
function sumSecondLowAndHigh(arr) {
  let sorted = arr.sort((a, b) => a - b);
  //Alert the sum of the second lowest and the second highest number
  alert(sorted[1] + sorted[sorted.length - 2]);
}

sumSecondLowAndHigh([2, 3, 1, 5, 4]);
