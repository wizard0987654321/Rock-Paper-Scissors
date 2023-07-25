// Function, that randomly gives us computer choice of game
function getComputerChoice() {

    const options = ["Rock", "Paper", "Scissors"];
    const randomInt = Math.floor(Math.random() * 3);
    const choice = options[randomInt];
    
    return choice;
}

/* Passing two arguments, player's choice and 
computer's choice to the function, that simulates
one round of the game and returns the relevant 
text message in the console
*/

function round(playerSelection, computerSelection) {
    
    if (computerSelection === "Rock") {
        return playerSelection === "Rock" ? 
        "Tied game":
        playerSelection === "Paper" ? 
        `You won! ${playerSelection} beats ${computerSelection}`:
        playerSelection === "Scissors" ?
        `You lost! ${computerSelection} beats ${playerSelection}`:
        "Invalid Selection! Please try again"
    } 

    else if (computerSelection === "Scissors") {
        return playerSelection === "Rock" ? 
        `You won! ${playerSelection} beats ${computerSelection}`:
        playerSelection === "Paper" ? 
        `You lost! ${computerSelection} beats ${playerSelection}`:
        playerSelection === "Scissors" ?
        "Tied game":
        "Invalid Selection! Please try again"
    }

    else if (computerSelection === "Paper") {
        return playerSelection === "Rock" ? 
        `You lost! ${computerSelection} beats ${playerSelection}`:
        playerSelection === "Paper" ? 
        "Tied game":
        playerSelection === "Scissors" ?
        `You won! ${playerSelection} beats ${computerSelection}`:
        "Invalid Selection! Please try again"
    }
}

/* Executing full game, that consists 5 rounds 
of the game and keeping track of ties, computer wins
and user wins
*/

function game(playerchoice) {
    let ties = 0;
    let computerScore = 0;
    let playerScore = 0;

    const computerChoice = getComputerChoice();
    const playerChoice = playerchoice;
    const result = (round(playerChoice, computerChoice));
    if (result[4] === "w") {
        playerScore++;
    } else if (result[6] === "s") {
        computerScore++;
    } else if (result[3] === "d") {
        ties++;
    } 
    console.log(result);

    console.log(ties, computerScore, playerScore);
}

// Saving all buttons in a variable
const choices = document.querySelectorAll("button");

/* Iterating through the node list of buttons
and calling a startGame funcion for each one, if
button is clicked */

choices.forEach(choice => {
    choice.addEventListener('click', startGame);
});

/* Getting the class of chosen button and passing it
to the game function, which simulates one round of 
Rock-Paper-Scissors game */

function startGame(e) {
    const chosenOption = e.target;
    const optionClass = chosenOption.classList[0];
    game(optionClass);
}

