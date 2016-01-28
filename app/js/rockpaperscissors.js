////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move === "rock") {
        return "rock";
    } else if (move === "paper") {
        return "paper";
    } else if (move === "scissors") {
        return "scissors";
    } else if (move === null) {
        return getInput();
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
}

function getComputerMove(move) {
    if (move === "rock") {
        return "rock";
    } else if (move === "paper") {
        return "paper";
    } else if (move === "scissors") {
        return "scissors";
    } else if (move === null) {
        return randomPlay();
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === "rock" && computerMove === "rock") {
        return "tie";
    } else if (playerMove === "paper" && computerMove === "paper") {
        return "tie";
    } else if (playerMove === "scissors" && computerMove === "scissors") {
        return "tie";
    } else if (playerMove === "rock" && computerMove === "paper") {
        return winner = "computer";
    } else if (playerMove === "paper" && computerMove === "scissors") {
        return winner = "computer";
    } else if (playerMove === "scissors" && computerMove === "rock") {
        return winner = "computer";
    } else if (playerMove === "paper" && computerMove === "rock") {
        return winner = "player";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        return winner = "player";
    } else if (playerMove === "rock" && computerMove === "scissors") {
        return winner = "player";
    } else {
        return "error :-(";
    }
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var max = 5;
    for (var i = playerWins || computerWins; i < max; i += 1)
    if (getWinner === "player") {
        return playerWins += 1
    } else if (getWinner === "computer") {
        return computerWins += 1
    } else {
        return "error :-(";
    }
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    //return [playerWins, computerWins];
}
