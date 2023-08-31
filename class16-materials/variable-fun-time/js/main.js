//--- Easy
//create a variable and assign it a number
let b = 8;
//minus 10 from that number
alert(b - 10);
//print that number to the console
console.log(b);
//--- Medium
//create a variable that holds a value from the input
let inputedVal = document.querySelector("#danceDanceRevolution").value;
//add 25 to that number
inputedVal = inputedVal + 25;

// or inputedVal += 25;
//alert that number
alert(inputedVal);

//--- Hard

//create a variable that holds the h1
let c = document.querySelector("h1").value;

//add an event listener to that element that console logs the sum of the two previous variables
c.addEventListener("click", sum);

function sum() {
  console.log(b + Number(inputedVal));
}
