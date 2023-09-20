// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let value = "thanksgiving";

value = value.toUpperCase();

console.log(value);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let favPowerRangersSeries = "Alien Rangers";
alert(favPowerRangersSeries.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function nums(a, b, c, d, e) {
  result = 100 - a - b - c - d - e;

  alert(Math.abs(result));
}

nums(1, 2, 3, 4, 5);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function nums3(a, b, c) {
  let min = Math.min(a, b, c);
  let max = Math.max(a, b, c);

  console.log(`The lowest num is ${min}, and the highest num is ${max}`);
}

nums3(1, 2, 3);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails() {
  let result = Math.random(); // Math.random() returns 0-1
  if (result < 0.5) {
    // to get a 50/50 result, check for one half or the other half
    return "heads";
  } else {
    return "tails";
  }
}

// single line solution
const headsOrTails = () => (Math.random() < 0.5 ? "heads" : "tails"); // ? : = if & else

// arrow function has an implicit return

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flipadelphia(n) {
  for (let i = 1; i <= n; i++) {
    let result = headsOrTails();
    console.log(result);
  }
}

flipadelphia();
