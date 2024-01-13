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
const restart = document.querySelector("#restart");

// LISTENERS
rock.addEventListener('click', () => {
    let playerChoice = "rock";
    displayPlayerChoice.textContent = "You chose " + playerChoice;
    getComputerChoice();
    playRound(computerChoice, playerChoice);
    updateScore();
});

paper.addEventListener('click', () => {
    let playerChoice = "paper";
    displayPlayerChoice.textContent = "You chose " + playerChoice;
    getComputerChoice();
    playRound(computerChoice, playerChoice);
    updateScore();
});

scissors.addEventListener('click', () => {
    let playerChoice = "scissors";
    displayPlayerChoice.textContent = "You chose " + playerChoice;
    getComputerChoice();
    playRound(computerChoice, playerChoice);
    updateScore();
});

restart.addEventListener('click', () => {
    computerScore = 0;
    playerScore = 0;
    displayPlayerChoice.textContent = "";
    displayComputerChoice.textContent = "";
    roundResult.textContent = "Choose your option";
    updateScore();
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
    displayComputerChoice.textContent = "The computer chose " + computerChoice;
    return computerChoice;
}

function updateScore() {
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;
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
        roundResult.textContent = "You win!";
    } else if (computerChoice == "rock" && playerChoice == "rock") {
        roundResult.textContent = "Draw.";
    } else if (computerChoice == "paper" && playerChoice == "rock") {
        computerScore++;
        roundResult.textContent = "You lose.";
    } else if (computerChoice == "scissors" && playerChoice == "paper") {
        computerScore++;
        roundResult.textContent = "You lose.";
    } else if (computerChoice == "rock" && playerChoice == "paper") {
        playerScore++;
        roundResult.textContent = "You win!";
    } else if (computerChoice == "paper" && playerChoice == "paper") {
        roundResult.textContent = "Draw.";
    } else if (computerChoice == "scissors" && playerChoice == "scissors") {
        roundResult.textContent = "Draw.";
    } else if (computerChoice == "rock" && playerChoice == "scissors") {
        computerScore++;
        roundResult.textContent = "You lose.";
    } else if (computerChoice == "paper" && playerChoice == "scissors") {
        playerScore++;
        roundResult.textContent = "You win!";
    }
    
    if (playerScore == 3) {
        roundResult.textContent = "You win best of three!";
    } else if (computerScore == 3) {
        roundResult.textContent = "Computer wins best of three.";
    }
};

// function game() {
//     getPlayerChoice();
//     console.log("You chose " + playerChoice);

//     getComputerChoice();
//     console.log("The computer chose " + computerChoice);

//     playRound(computerChoice, playerChoice);
//     console.log("Your score is " + playerScore);
//     console.log("The computers score is " + computerScore);

//     if (playerScore > computerScore) {
//         console.log("You win the best of three!");
//     } else if (playerScore < computerScore){
//         console.log("Computer wins the best of three!");
//     } else {
//         console.log("Draw for the best of three!");
//     }
// }

// RUN
updateScore();
