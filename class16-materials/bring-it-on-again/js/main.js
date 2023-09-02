// *Variables*
// Declare a variable, assign it a value, and alert the value
let a = 10;
alert(a);
// Create a variable, divide it by 10, and console log the value
let b = 10;
let c = b % 10;
console.log(c);
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiply(a, b, c) {
  result = a * b * c;
  alert(result);
}

multiply(10, 10, 10);
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function nums(a, b, c, d) {
  result = a + b - c - d;
  console.log(result);
}

nums(10, 10, 10, 10);

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
document.querySelector("#day").value.toLowercase();

function day() {
  if (day == "saturday" || "sunday") {
    alert("weekend");
  } else if (
    day == "monday" ||
    day == "tuesday" ||
    day == "wednesday" ||
    day == "thursday" ||
    day == "friday"
  ) {
    alert("weekday");
  } else if (day == "") {
    alert("You must enter a day of the week");
  }
}
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
