let playerSelectionChoices = document.querySelectorAll(".playerchoice");

let displayResults = document.querySelector(".display-results");

function getComputerChoice() {
  let randomValue;
  randomValue = Math.floor(Math.random() * 3) + 1; // Generates a random integer between 1 and 3

  if (randomValue == 1) {
    return "rock";
  } else if (randomValue == 2) {
    return "paper";
  } else if (randomValue == 3) {
    return "scissors";
  }
}

function singleRound(playerSelect, computerSelection) {
  let result = "";

  if (playerSelect === computerSelection) {
    result = "It's a Draw! Play Again";
  } else if (playerSelect === "rock" && computerSelection === "scissors") {
    result = "You Win! Rock beats Scissors";
  } else if (playerSelect === "rock" && computerSelection === "paper") {
    result = "You Lose! Paper beats Rock";
  } else if (playerSelect === "paper" && computerSelection === "rock") {
    result = "You Win! Paper beats Rock";
  } else if (playerSelect === "paper" && computerSelection === "scissors") {
    result = "You Lose! Scissors beats Paper";
  } else if (playerSelect === "scissors" && computerSelection === "rock") {
    result = "You Lose! Rock beats Scissors";
  } else if (playerSelect === "scissors" && computerSelection === "paper") {
    result = "You Win! Scissors beats Paper";
  }

  return result;
}

function game() {
  let score = 0;
  let report = "";
  let round = 5;

  for (let i = 1; i <= round; i++) {
    let computerSelection = getComputerChoice();

    let playerChoice = "";

    playerSelectionChoices.forEach((choice) => {
      choice.addEventListener("click", () => {
        playerChoice = choice.id;
        
        singleRound(playerChoice, computerSelection);
    
        let result = singleRound(playerSelect, computerSelection);
    
        displayResults.textContent = result;
    
        if (result === "It's a Draw! Play Again") {
          score = score;
        } else if (
          result === "You Win! Rock beats Scissors" ||
          result === "You Win! Paper beats Rock" ||
          result === "You Win! Scissors beats Paper"
        ) {
          score++;
        } else {
          score--;
        }
      });
    });

  }

  if (score === 0) {
    report = "It's a Draw!";
  } else if (score > 0) {
    report = "You Won!";
  } else {
    report = "You Lost!";
  }

  return report;
}
