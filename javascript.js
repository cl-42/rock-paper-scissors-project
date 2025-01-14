// index.html
console.log("Hello World!")

// Your game will be played against the computer.
// You will write a function that randomly returns “rock”, “paper” or “scissors”.

// Create function that randomly returns a number between 0 and 1
function getRandom() {
    return Math.random()
}

console.log(getRandom())

// Create a new function named getComputerChoice.
function getComputerChoice() {
    if (getRandom() >= 0 && getRandom() < 0.333) {
        return "Rock"
    } else if (getRandom() >= 0.333 && getRandom() < 0.666) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

// Create function that logs user's choice
function getHumanChoice() {
    return prompt("Your move: Rock, Paper or Scissors?","").toLowerCase()
}


// Game will keep track of the players score. 
// Write variables to keep track of the players score.

// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.
let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {
    if (humanChoice === "rock" && computerChoice === "Scissors") {
        alert("You win! Rock beats Scissors.")
        humanScore = ++humanScore
    } else if (humanChoice === "rock" && computerChoice === "Paper") {
        alert("You lose! Paper beats Rock.")
        computerScore = ++computerScore
    } else if (humanChoice === "rock" && computerChoice === "Rock") {
        alert("It's a draw! You both chose Rock.")
    } else if (humanChoice === "paper" && computerChoice === "Rock") {
        alert("You win! Paper beats Rock.")
        humanScore = ++humanScore
    } else if (humanChoice === "paper" && computerChoice === "Scissors") {
        alert("You lose! Scissors beats Paper.")
        computerScore = ++computerScore
    } else if (humanChoice === "paper" && computerChoice === "Paper") {
        alert("It's a draw! You both chose Paper.")
    } else if (humanChoice === "scissors" && computerChoice === "Paper") {
        alert("You win! Scissors beats Paper.")
        humanScore = ++humanScore
    } else if (humanChoice === "scissors" && computerChoice === "Rock") {
        alert("You lose! Rock beats Scissors.")
        computerScore = ++computerScore
    } else if (humanChoice === "scissors" && computerChoice === "Scissors") {
        alert("It's a draw! You both chose Scissors.")
    }
}

playRound()

console.log(humanScore)