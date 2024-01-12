// VARIABLES
// Need variables to store the player and computer choice and round of count
let computerChoice = "";
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;

// ELEMENTS
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// LISTENERS
rock.addEventListener('click', () => {
    let playerChoice = "rock";
    getComputerChoice();
    playRound(computerChoice, playerChoice);
});

paper.addEventListener('click', () => {
    let playerChoice = "rock";
    getComputerChoice();
    playRound(computerChoice, playerChoice);
});

scissors.addEventListener('click', () => {
    let playerChoice = "rock";
    getComputerChoice();
    playRound(computerChoice, playerChoice);
});

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
    return computerChoice;
}

// Display round result
// Display the running score

// Player enters choice
// function getPlayerChoice() {
//     let input = prompt("Please enter your move (rock, paper or scissors)");
//     playerChoice = input.toLowerCase();
//     return playerChoice;
// }

// Play round and return result of round
function playRound(computerChoice, playerChoice) {
    if (computerChoice == "scissors" && playerChoice == "rock") {
        playerScore++;
        result.textContent = "You win!";
    } else if (computerChoice == "rock" && playerChoice == "rock") {
        result.textContent = "Draw";
    } else if (computerChoice == "paper" && playerChoice == "rock") {
        computerScore++;
        result.textContent = "You lose.";
    } else if (computerChoice == "scissors" && playerChoice == "paper") {
        computerScore++;
        result.textContent = "You lose.";
    } else if (computerChoice == "rock" && playerChoice == "paper") {
        playerScore++;
        result.textContent = "You win!";
    } else if (computerChoice == "paper" && playerChoice == "paper") {
        result.textContent = "Draw";
    } else if (computerChoice == "scissors" && playerChoice == "scissors") {
        result.textContent = "Draw";
    } else if (computerChoice == "rock" && playerChoice == "scissors") {
        computerScore++;
        result.textContent = "You lose.";
    } else if (computerChoice == "paper" && playerChoice == "scissors") {
        playerScore++;
        result.textContent = "You win!";
    }
}

function game() {
    getPlayerChoice();
    console.log("You chose " + playerChoice);

    getComputerChoice();
    console.log("The computer chose " + computerChoice);

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
