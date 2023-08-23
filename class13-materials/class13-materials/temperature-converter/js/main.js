//Write your pseduo code first!

document.querySelector("#yell").addEventListener("click", convert);

function convert() {
  let celsius = document.querySelector("#sel").value;

  celsius = (celsius * 9) / 5 + 32;

  document.querySelector("#placeToYell").innerText = celsius;
}
