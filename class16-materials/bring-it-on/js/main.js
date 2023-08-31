// *Variables*
// Create a variable and console log the value
let b = 8;
console.log(b);
// Create a variable, add 10 to it, and alert the value
let c = 10;

b = c + 10;

alert(b);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract(a, b, c, d) {
  result = a - b - c - d;
  alert(result);
}

subtract(40, 10, 10, 10);

// Create a function that divides one number by another and returns the remainder
function divide(a, b) {
  result = a % b;
  return result;
}

divide(40, 10);
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function iff(a, b) {
  if (a + b > 50) {
    alert("jumanji");
  }
}

iff(50, 30);
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
