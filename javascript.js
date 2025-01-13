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
        return "You win! Rock beats Scissors."
    } else if (humanChoice === "rock" && computerChoice === "Paper") {
        return "You lose! Paper beats Rock."
    } else if (humanChoice === "rock" && computerChoice === "Rock") {
        return "It's a draw! You both chose Rock."
    } else if (humanChoice === "paper" && computerChoice === "Rock") {
        return "You win! Paper beats Rock."
    } else if (humanChoice === "paper" && computerChoice === "Scissors") {
        return "You lose! Scissors beats Paper."
    } else if (humanChoice === "paper" && computerChoice === "Paper") {
        return "It's a draw! You both chose Paper."
    } else if (humanChoice === "scissors" && computerChoice === "Paper") {
        return "You win! Scissors beats Paper."
    } else if (humanChoice === "scissors" && computerChoice === "Rock") {
        return "You lose! Rock beats Scissors."
    } else if (humanChoice === "scissors" && computerChoice === "Scissors") {
        return "It's a draw! You both chose Scissors."
    }
}

console.log(playRound())




// scissors > paper
// paper > rock
// rock > scissors

// scissors = scissors
// rock = rock
// paper = paper