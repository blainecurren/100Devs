//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
const button = document.querySelector("buttons");
button.addEventListener("click", getCocktail);

function cocktail(name, image, instructions) {
  this.name = name;
  this.image = image;
  this.instructions = instructions;
}

cocktail.prototype.createElement = function () { // prototypes are the mechanism by which JS objects inherit features from one another. 
  const parentElement = document.getElementById("parent-container");
};

function getCocktail() {
  document.querySelector("#input").value`${cocktail.name}`;
}

function displayCocktail() {}

