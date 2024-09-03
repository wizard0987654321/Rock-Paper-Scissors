// Global variables to keep track of the score
let ties: number = 0;
let computerScore: number = 0;
let playerScore: number = 0;

// Function to randomly select the computer's choice
function getComputerChoice(): string {
  const options: string[] = ["Rock", "Paper", "Scissors"];
  const randomInt: number = Math.floor(Math.random() * 3);
  return options[randomInt];
}

// Function that simulates one round of the game
function round(playerSelection: string, computerSelection: string): string {
  if (computerSelection === "Rock") {
    if (playerSelection === "Rock") return "Tied game";
    if (playerSelection === "Paper")
      return `You won! ${playerSelection} beats ${computerSelection}`;
    if (playerSelection === "Scissors")
      return `You lost! ${computerSelection} beats ${playerSelection}`;
  } else if (computerSelection === "Scissors") {
    if (playerSelection === "Rock")
      return `You won! ${playerSelection} beats ${computerSelection}`;
    if (playerSelection === "Paper")
      return `You lost! ${computerSelection} beats ${playerSelection}`;
    if (playerSelection === "Scissors") return "Tied game";
  } else if (computerSelection === "Paper") {
    if (playerSelection === "Rock")
      return `You lost! ${computerSelection} beats ${playerSelection}`;
    if (playerSelection === "Paper") return "Tied game";
    if (playerSelection === "Scissors")
      return `You won! ${playerSelection} beats ${computerSelection}`;
  }
  return "Invalid Selection! Please try again";
}

// Function that handles the full game logic
function game(playerchoice: string): void {
  const computerChoice = getComputerChoice();
  const result = round(playerchoice, computerChoice);

  // Update scores based on the result
  if (result.includes("won")) {
    playerScore++;
  } else if (result.includes("lost")) {
    computerScore++;
  } else if (result.includes("Tied")) {
    ties++;
  }

  // Update the result on the page
  const resultPara = document.querySelector(".presult") as HTMLElement;
  resultPara.textContent = result;

  // Update the score on the page
  const scorePara = document.querySelector(".pscore") as HTMLElement;
  scorePara.textContent =
    playerScore > 4
      ? "You won! Computer is beaten"
      : ties > 4
      ? "Tied Game, Friendship wins!"
      : computerScore > 4
      ? "You lost, Computer beat you"
      : `${playerScore} ${ties} ${computerScore}`;
}

// Attach event listeners to the buttons
const choices = document.querySelectorAll("button");

choices.forEach((choice) => {
  choice.addEventListener("click", startGame);
});

// Function that starts the game round when a button is clicked
function startGame(e: Event) {
  const chosenOption = e.target as HTMLElement;
  const optionClass = chosenOption.classList[0];
  game(optionClass);
}
