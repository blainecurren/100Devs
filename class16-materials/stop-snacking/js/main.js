//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector("#help").addEventListener("click", help);

function help() {
  let numHelp = Number(document.querySelector(input).value);

  document.querySelector("#stops").innerText = "";

  for (let i = 1; i <= numHelp; i++) {
    document.querySelector("stops").innerText += " stop";
  }
}
