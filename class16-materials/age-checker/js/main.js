//Create a conditonal that checks their age
let age = document.querySelector("#danceDanceRevolution").value;
//If under 16, tell them they can not drive
if (age < 16) {
  alert("You cannot drive");
  //If under 18, tell them they can't hate from outside the club, because they can't even get in
} else if (age < 18) {
  alert("You cant hate from outside the club");
  //If under 21, tell them they can not drink
} else if (age < 21) {
  alert("you can't drink");
  //If under 25, tell them they can not rent cars affordably
} else if (age < 25) {
  alert("you cant rent cars affordably");
  //If under 30, tell them they can not rent fancy cars affordably
} else if (age < 30) {
  alert("You cannot rent fancy cars affordably");
  //If under over 30, tell them there is nothing left to look forward too
} else if (age > 30) {
  alert("There is literally nothing left to look forward to");
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
h1.addEventListener("click", larry);

function larry() {
  document.querySelector("#h1").innerHTML = age;
}

let age1 = document.querySelector("#danceDanceRevolution").value;

if (age1 < 18 ) {
se
}