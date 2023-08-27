//Write your pseduo code first!

// get temperature in celsius with input
document.querySelector("#yell").addEventListener("click", convert);

function convert() {
  console.log("Converting");
  let temp = document.querySelector("#firstName").value;
  // convert temperature to fahrenheit
  temp = (temp * 9) / 5 + 32;
  // display temperature in fahrenheit
  document.querySelector("#placeToYell").innerText = temp;
}
