// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = apples;
alert(favFood);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divideAndMulti(n1, n2, n3) {
  let prod = (n1 / n2) * n3;
  alert(prod);
}

divideAndMulti(13, 3, 4); //division

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRootIt(robot) {
  console.log(Math.cbrt(robot).toFixed(4));
}

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function checkForSummer(month) {
  let monthLowerCase = month.toLowerCase();
  if (
    monthLowerCase === "june" ||
    monthLowerCase === "july" ||
    monthLowerCase === "august"
  ) {
    alert("yay");
  } else {
    alert("boo");
  }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skip4s(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 !== 0) {
      console.log(i);
    }
  }
}
