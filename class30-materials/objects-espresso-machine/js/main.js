//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine {
  constructor(color, make, model, price) {
    this.color = color;
    this.make = make;
    this.model = model;
    this.price = price;
  }
  turnOn() {
    alert(`You got ${this.size}`);
  }
  steam() {
    alert(`You got ${this.brand}`);
  }
  brew() {
    alert(`You got ${this.price}`);
  }
}

let gaggia = new EspressoMachine("red", "gaggia", "classic pro", 400);
