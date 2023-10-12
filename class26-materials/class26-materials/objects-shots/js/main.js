//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// Class 21-22 concepts below

const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

// Create an object to hold items from the api
function Cocktail(name, image, instructions) {
  this.name = name;
  this.image = image;
  this.instructions = instructions;
}

const button = document.querySelector("button");
button.addEventListener("click", onClick);

// TODO: Look into prototypes
Cocktail.prototype.createElement = function () {
  const parentElement = document.getElementById("parent-container");
  const container = document.createElement("div");
  const drinkName = document.createElement("h2");
  const drinkImage = document.createElement("img");
  const drinkInstructions = document.createElement("p");

  drinkName.textContent = this.name;
  drinkImage.src = this.image;
  drinkInstructions.textContent = this.instructions;
  parentElement.appendChild(container);
  container.appendChild(drinkName);
  container.appendChild(drinkImage);
  container.appendChild(drinkInstructions);
};

function onClick() {
  var name = document.querySelector("input").value;
  const cocktailURL = url + name;
  console.log(cocktailURL);

  fetch(cocktailURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const cocktailObjects = [];
      const drinks = data.drinks;
      for (let i = 0; i < drinks.length; i++) {
        const cocktail = drinks[i];
        const cocktailObject = new Cocktail(
          cocktail.strDrink,
          cocktail.strDrinkThumb,
          cocktail.strInstructions
        );
        cocktailObjects.push(cocktailObject);
        cocktailObject.createElement();
      }
      console.log(cocktailObjects);
    })
    .catch((err) => {
      console.log(`error${err}`);
    });
}
