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

console.log(getComputerChoice())

// Create function that logs user's choice
function getHumanChoice() {
    return prompt("Your move: Rock, Paper or Scissors?","")
}

console.log(getHumanChoice())

// Game will keep track of the players score. 
// Write variables to keep track of the players score.

// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.


