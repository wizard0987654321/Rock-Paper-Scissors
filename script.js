
let ties = 0;
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {

    const options = ["Rock", "Paper", "Scissors"];
    const randomInt = Math.floor(Math.random() * 3);
    const choice = options[randomInt];
    
    return choice;
}

function getPlayerChoice() {

    let choice = prompt("Chosse between Rock, Paper and Scissors");
    choice = choice.toLowerCase();
    choice = capitalize(choice);

    return choice === "Rock" || choice === "Paper"
    || choice === "Scissors" ? choice: "Invalid Choice"
}

function capitalize(word) {

    let firstLetter = word.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    const restWord = word.slice(1);
    const result = firstLetter.concat(restWord);

    return result;
}

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

function game() {
    let ties = 0;
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const playerChoice = getPlayerChoice();
        const result = (round(playerChoice, computerChoice));
        if (result[4] === "w") {
            playerScore++;
        } else if (result[6] === "s") {
            computerScore++;
        } else if (result[3] === "d") {
            ties++;
        } 
        console.log(result);
    }

    console.log(ties, computerScore, playerScore);
}

game();


