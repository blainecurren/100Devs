// //Arrays

// //Create and array of tv shows. Loop through and print each show to the console
// let tvShows = ["bachelor", "reno 911", "walking dead"];

// tvShows.forEach((show) => console.log(show)); // <= arrow function, for each iterates once for every element in the array, plugs each element into the show parameter and then prints

// //Create and array of numbers
// let nums = [21, 56, 88, 24, 99, 710];
// //Return a new array of numbers that includes every even number from the previous Arrays
// let onlyEvens = (arr) => arr.filter((n) => n % 2 === 0);
// // filter runs through the array once for each element in the array and creates a new array checking if each element is divisible by 2 with a remainder of 0
// // n & arr are just parameters
// // arrow functions have an implicit returns no need to say return ...;
// console.log(onlyEvens(nums));

// //Create a function that takes in an array of numbers
// function sumSecondLowAndHigh(arr) {
//   let sorted = arr.sort((a, b) => a - b);
//   //Alert the sum of the second lowest and the second highest number
//   alert(sorted[1] + sorted[sorted.length - 2]);
//   // alert the sorted arr from the sorted function at index 1 & -2
// }

// sumSecondLowAndHigh([2, 3, 1, 5, 4]);

