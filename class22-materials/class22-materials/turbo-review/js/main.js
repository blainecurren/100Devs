// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = " Milos ";
favDrink = favDrink.trim();

console.log(favDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let fruit = "Is there a apple left?";

if (fruit.search("apple") !== -1) {
  console.log("Yes");
} else {
  console.log("no");
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissor() {
  let result = Math.random();

  if (result < 0.33) {
    return "paper";
  } else if (result < 0.66) {
    return "rock";
  } else {
    return "scissor";
  }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(playerChoice) {
  let botChoice = rockPaperScissor();

  if (
    (playerChoice === "rock" && botChoice === "scissor") ||
    (playerChoice === "paper" && botChoice === "rock") ||
    (playerChoice === "scissor" && botChoice === "paper")
  ) {
    console.log("Player Wins");
  } else if (playerChoice === botChoice) {
    console.log("its a tie");
  } else {
    console.log("Player Loses");
  }
}

// checkWin("Rock");

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGamesXTimes(arr) {
  arr.forEach((choice) => checkWin(choice));
}

playGamesXTimes(["rock", "paper", "scissor"]);
