class Cocktail {
  constructor(name, image, instructions) {
    this.name = name;
    this.image = image;
    this.instructions = instructions;
  }
}

const button = document.querySelector("button");
button.addEventListener("click", onClick);

Cocktail.prototype.createElement = function () {
  const parentElement = document.getElementById("parent-container");
  const container = document.createElement("div");
  const drinkName = document.createElement("h2");
  const drinkImage = document.createElement("img");
  const drinkInstructions = document.createElement("p");
};

drinkName.textContent = this.name;
drinkImage.src = this.image;
drinkInstructions.textContent = this.instructions;
parentElement.appendChild(container);
container.appendChild(drinkName);
container.appendChild(drinkImage);
container.appendChild(drinkInstructions);

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
