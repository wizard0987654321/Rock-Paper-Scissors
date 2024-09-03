// Global variables to keep track of the score
var ties = 0;
var computerScore = 0;
var playerScore = 0;
// Function to randomly select the computer's choice
function getComputerChoice() {
    var options = ["Rock", "Paper", "Scissors"];
    var randomInt = Math.floor(Math.random() * 3);
    return options[randomInt];
}
// Function that simulates one round of the game
function round(playerSelection, computerSelection) {
    if (computerSelection === "Rock") {
        if (playerSelection === "Rock")
            return "Tied game";
        if (playerSelection === "Paper")
            return "You won! ".concat(playerSelection, " beats ").concat(computerSelection);
        if (playerSelection === "Scissors")
            return "You lost! ".concat(computerSelection, " beats ").concat(playerSelection);
    }
    else if (computerSelection === "Scissors") {
        if (playerSelection === "Rock")
            return "You won! ".concat(playerSelection, " beats ").concat(computerSelection);
        if (playerSelection === "Paper")
            return "You lost! ".concat(computerSelection, " beats ").concat(playerSelection);
        if (playerSelection === "Scissors")
            return "Tied game";
    }
    else if (computerSelection === "Paper") {
        if (playerSelection === "Rock")
            return "You lost! ".concat(computerSelection, " beats ").concat(playerSelection);
        if (playerSelection === "Paper")
            return "Tied game";
        if (playerSelection === "Scissors")
            return "You won! ".concat(playerSelection, " beats ").concat(computerSelection);
    }
    return "Invalid Selection! Please try again";
}
// Function that handles the full game logic
function game(playerchoice) {
    var computerChoice = getComputerChoice();
    var result = round(playerchoice, computerChoice);
    // Update scores based on the result
    if (result.includes("won")) {
        playerScore++;
    }
    else if (result.includes("lost")) {
        computerScore++;
    }
    else if (result.includes("Tied")) {
        ties++;
    }
    // Update the result on the page
    var resultPara = document.querySelector(".presult");
    resultPara.textContent = result;
    // Update the score on the page
    var scorePara = document.querySelector(".pscore");
    scorePara.textContent =
        playerScore > 4
            ? "You won! Computer is beaten"
            : ties > 4
                ? "Tied Game, Friendship wins!"
                : computerScore > 4
                    ? "You lost, Computer beat you"
                    : "".concat(playerScore, " ").concat(ties, " ").concat(computerScore);
}
// Attach event listeners to the buttons
var choices = document.querySelectorAll("button");
choices.forEach(function (choice) {
    choice.addEventListener("click", startGame);
});
// Function that starts the game round when a button is clicked
function startGame(e) {
    var chosenOption = e.target;
    var optionClass = chosenOption.classList[0];
    game(optionClass);
}
