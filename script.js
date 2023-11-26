// Selects all elements with the class "playerchoice" and stores them in a NodeList
let playerSelectionChoices = document.querySelectorAll(".playerchoice");

// Selects the element with the class "display-results"
let displayResults = document.querySelector(".display-results");

// Selects the element with the class "player-choice_img"
let playerChoiceImg = document.querySelector(".player-choice_img");

// Selects the element with the class "computer-choice_img"
let computerChoiceImg = document.querySelector(".computer-choice_img");

// Function to generate a random choice for the computer: rock, paper, or scissors

function playGame() {
  let playerChoice = "";
  let computerChoice = "";

  playerSelectionChoices.forEach(choice => choice.addEventListener('click', () => {
    playerChoice = choice.id;

    computerChoice = getComputerChoice();
    
    //Logic for displaying player choice
    if (playerChoice === "rock") {
      playerChoiceImg.src = "./assets/img/rock.png";
    } else if (playerChoice === "paper") {
      playerChoiceImg.src = "./assets/img/paper.png";
    } else {
      playerChoiceImg.src = "./assets/img/rock.png";
    }

    //Logic for displaying Computer choice
    if (computerChoice === "rock") {
      computerChoiceImg.src = "./assets/img/rock.png";
    } else if (computerChoice === "paper") {
      computerChoiceImg.src = "./assets/img/paper.png";
    } else {
      computerChoiceImg.src = "./assets/img/rock.png";
    }


  }))
}

playGame();

function getComputerChoice() {
  let randomValue;
  // Generates a random integer between 1 and 3
  randomValue = Math.floor(Math.random() * 3) + 1;

  if (randomValue == 1) {
    return "rock";
  } else if (randomValue == 2) {
    return "paper";
  } else if (randomValue == 3) {
    return "scissors";
  }
}

// Function to determine the result of a single round between player and computer
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