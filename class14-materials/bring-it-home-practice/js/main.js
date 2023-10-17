// *Variables*
// Create a variable and console log the value
let num = 0;
console.log(num);

// Create a variable, add 10 to it, and alert the value
let num2 = 10;

num3 = num2 + 10;
alert(num3);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtracts4(a, b, c, d) {
  alert(a - b - c - d);
}

subtracts4(26, 2, 1, 3);

subtract4Numbers(50, 10, 4, 2);
// Create a function that divides one number by another and returns the remainder
function divide(num1, num2) {
  alert(num1 / num2);
}

divide(26, 2);

divide(50, 10);
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function greaterThan50(num1, num2) {
  if (num1 + num2 > 50) {
    alert("jumanji");
  } else {
    alert("sorry");
  }
}

greaterThan50(26, 2);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiply(num1, num2, num3) {
  if ((num1 * num2 * num3) % 3 == 0) {
    alert("zebra");
  } else {
    alert("na dog");
  }
}

multiply(15, 6, 12);
