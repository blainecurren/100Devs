//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums1 = [42, 19, 77, 33, 57];

let sum = nums1.reduce((acc, c) => acc + c, 0); // acc = accumulator c = current value 0 = accumulator starting at 0

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let newArr = (nums) => nums.map((num) => num ** 2);

//Create a function that takes string
//Print the reverse of that string to the console
let unoReverse = (str) => console.log(str.split("").reverse().join(""));

//Create a function that takes in a string
const palindromeCheck = (str) => alert(str === str.split("").reverse().join(""))
//Alert if the string is a palindrome or not
