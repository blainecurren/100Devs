//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
let thatGuy = {};

thatGuy.speed = 9001;
thatGuy.power = 9001;
thatGuy.height = "6'3";
thatGuy.weight = 220;

thatGuy.getSpeed = function () {
  console.log(`thatGuys speed is ${thatGuy.speed}`);
};

thatGuy.getPower = function () {
  console.log(`thatGuys power is ${thatGuy.power}`);
};

thatGuy.getHeight = function () {
  console.log(`thatGuys height is ${thatGuy.height}`);
};

thatGuy.getWeight = function () {
    console.log(`firstGuys weight is ${thatGuy.weight}`);
}

