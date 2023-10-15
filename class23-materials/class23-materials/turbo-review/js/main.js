// *Variables*
// Declare a variable and assign it to a sentence as a string. Alert if the sentence is a question
const str = "Is this the best week ever?";

alert(str.endsWith("?"));

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let str2 = "I am looking for jr. dev positions";
console.log(str.replaceAll("jr. dev", "software engineering"));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissor() {
  let random = Math.random();
  if (random > 0.33) {
    return "rock";
  } else if (random > 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(playerChoice) {
  let botChoice = rockPaperScissor();

  if (
    (playerChoice === "rock" && botChoice === "scissors") ||
    (playerChoice === "scissor" && botChoice === "paper") ||
    (playerChoice === "paper" && botChoice === "rock")
  ) {
    console.log("Player wins!");
  } else if (playerChoice === botChoice) {
    console.log("Its a tie!");
  } else {
    console.log("Player lost!");
  }
}

checkWin("paper");

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
