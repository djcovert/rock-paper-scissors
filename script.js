// VARIABLES
// Need variables to store the player and computer choice and round of count
let computerChoice = "";
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;

// FUNCTIONS
// Computer generates choice
function getComputerChoice() {
    let randomNumber = Math.random();
    
    if (randomNumber <= 0.33) {
        computerChoice = "rock";
    } else if (randomNumber >= .66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    console.log("The computer chose " + computerChoice);
    return computerChoice;
}

// Player enters choice
function getPlayerChoice() {
    let input = prompt("Please enter your move (rock, paper or scissors)");
    playerChoice = input.toLowerCase();
    console.log("You chose " + playerChoice);
    return playerChoice;
}

// Play round and return result of round
function playRound(computerChoice, playerChoice) {
    getComputerChoice();
    getPlayerChoice();
    
    if (computerChoice == "scissors" && playerChoice == "rock") {
        playerScore++;
        console.log("You win!");
    } else if (computerChoice == "rock" && playerChoice == "rock") {
        console.log("Draw.");
    } else if (computerChoice == "paper" && playerChoice == "rock") {
        computerScore++;
        console.log("You lose!");
    } else if (computerChoice == "scissors" && playerChoice == "paper") {
        playerScore++;
        console.log("You win!");
    } else if (computerChoice == "rock" && playerChoice == "paper") {
        computerScore++;
        console.log("You lose!");
    } else if (computerChoice == "paper" && playerChoice == "paper") {
        console.log("Draw.");
    } else if (computerChoice == "scissors" && playerChoice == "scissors") {
        console.log("Draw.");
    } else if (computerChoice == "rock" && playerChoice == "scissors") {
        computerScore++;
        console.log("You lose!");
    } else if (computerChoice == "paper" && playerChoice == "scissors") {
        playerScore++;
        console.log("You win!");
    }
}

function game() {
    playRound(computerChoice, playerChoice);
    console.log("Your score is " + playerScore);
    console.log("The computers score is " + computerScore);

    playRound(computerChoice, playerChoice);
    console.log("Your score is " + playerScore);
    console.log("The computers score is " + computerScore);

    playRound(computerChoice, playerChoice);
    console.log("Your score is " + playerScore);
    console.log("The computers score is " + computerScore);

    if (playerScore > computerScore) {
        console.log("You win the best of three!");
    } else if (playerScore < computerScore){
        console.log("Computer wins the best of three!");
    } else {
        console.log("Draw for the best of three!");
    }
}

// RUN
game();
