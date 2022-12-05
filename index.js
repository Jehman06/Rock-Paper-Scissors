
// Global variables
const choices = ["rock", "paper", "scissors"]
const winners = [];
const startGame = document.querySelector(".flex-container")

// Main function of the game. It allows to play 5 rounds
function game() {
    for(let i = 1; i <= 5; i++) {
        playRound(i);
    } 
    // Change the button after the game. Start Game => Play Again
    document.querySelector("button").textContent = "Play Again"  
    logWins()
}

// Play 1 round. Display the score of the round.
function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)
}

// Set the player's choice. Correct the player if they type something wrong.
function playerChoice() {
    let input = prompt("Rock, paper or scissors")
    while (input == null) { // If the user hits cancel
        input = prompt("Rock, paper or scissors")
    } 
    input = input.toLowerCase();
    let check = validateInput(input)
    while (check == false) { // If the user types something else
       input = prompt(
        "Type rock, paper or scissors. Spelling needs to be exact, but capitalization doesn't matter."
        ); 
    while (input == null) {
        input = prompt("Rock, paper or scissors")
    }
       input = input.toLowerCase();
       check = validateInput(input)
    }
    return input
}

// Set a random computer's choice.
function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function validateInput(choice) {
    return choices.includes(choice);
}

// Function that allows to check who wins (Player vs Computer)
function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "Tie!"
    } else if (
        (choiceP === "rock" && choiceC === "scissors") ||
        (choiceP === "paper" && choiceC === "rock") ||
        (choiceP === "scissors" && choiceC === "paper") 
    ) {
        return "Player"
    } else {
        return "Computer";
    }
}

// Displaying the final results
function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie!").length;
    console.log("Results:");
    console.log("Player wins:", playerWins);
    console.log("Computer wins:", computerWins);
    console.log("Ties:", ties);
}

// Displaying the score of the round, as well as the player's and computer's choice
function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round:", round)
    console.log("Player chose:", playerChoice)
    console.log("Computer chose:", computerChoice)
    console.log(winner, "won the round!")
    console.log("----------------------")
}

