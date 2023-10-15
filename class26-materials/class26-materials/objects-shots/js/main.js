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

// TODO: Look into prototypes: Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.
Cocktail.prototype.createElement = function () { // <- This is linked to the cocktail object
  const parentElement = document.getElementById("parent-container"); // Adds parent container to hold all child elements that follow
  const container = document.createElement("div");
  const drinkName = document.createElement("h2");
  const drinkImage = document.createElement("img");
  const drinkInstructions = document.createElement("p");

  drinkName.textContent = this.name; // Set drinkName's text content to the cocktail name property
  drinkImage.src = this.image;
  drinkInstructions.textContent = this.instructions;
  parentElement.appendChild(container);
  container.appendChild(drinkName);
  container.appendChild(drinkImage);
  container.appendChild(drinkInstructions);
};

function onClick() {
  var name = document.querySelector("input").value; // sets var name as the user input
  const cocktailURL = url + name;
  console.log(cocktailURL);

  fetch(cocktailURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const cocktailObjects = []; // creating an empty array to store data received by API call
      const drinks = data.drinks; // sets data.drinks from the api as a const to be referenced later
      for (let i = 0; i < drinks.length; i++) { // Loops through array to get new drinks
        const cocktail = drinks[i]; // sets cocktail as the drink incrementor
        const cocktailObject = new Cocktail( //creates a new object
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
