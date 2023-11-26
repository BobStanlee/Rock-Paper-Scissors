// Selects all elements with the class "playerchoice" and stores them in a NodeList
let playerSelectionChoices = document.querySelectorAll(".playerchoice");

// Selects the element with the class "display-results"
let displayResults = document.querySelector(".display-results");

// Selects the element with the class "player-choice_img"
let playerChoiceImg = document.querySelector(".player-choice_img");

// Selects the element with the class "computer-choice_img"
let computerChoiceImg = document.querySelector(".computer-choice_img");

let computerScore = 0;
let playerScore = 0;
let updatedPlayerScore = 0;
let updatedComputerScore = 0;

function playGame() {
  let playerChoice = "";
  let computerChoice = "";
  let results = "";

  playerSelectionChoices.forEach((choice) =>
    choice.addEventListener("click", () => {
      playerChoice = choice.id;

      computerChoice = getComputerChoice();

      //Logic for displaying player choice
      if (playerChoice === "rock") {
        playerChoiceImg.src = "./assets/img/rock.png";
      } else if (playerChoice === "paper") {
        playerChoiceImg.src = "./assets/img/paper.png";
      } else {
        playerChoiceImg.src = "./assets/img/scissors.png";
      }

      //Logic for displaying Computer choice
      if (computerChoice === "rock") {
        computerChoiceImg.src = "./assets/img/rock.png";
      } else if (computerChoice === "paper") {
        computerChoiceImg.src = "./assets/img/paper.png";
      } else {
        computerChoiceImg.src = "./assets/img/scissors.png";
      }

      results = singleRound(playerChoice, computerChoice);

      //call display results to screen function
      displayResultsOnScreen(results);

      //Update both player and computer scores
      let updatedScores = updateScores(results, playerScore, computerScore);

      //Updates the player-score element
      let playerScoreContent = document.getElementById("player-score").textContent,
      computerScoreContent = document.getElementById("computer-score").textContent;

      console.log({playerScoreContent, computerScoreContent});
     

      // if (updatedScores.playerScore === 1) {
      //   updatedPlayerScore++;
      //   playerScoreContent = `Player: ${updatedPlayerScore}`
      // }
    })
  );
}

// Function updates both player and computer scores
function updateScores(results, playerScore, computerScore) {
  if (
    results === "You Win! Scissors beats Paper" ||
    results === "You Win! Paper beats Rock" ||
    results === "You Win! Rock beats Scissors"
  ) {
    playerScore++;
  } else if (results === "It's a Draw! Play Again") {
    playerScore = playerScore;
    computerScore = computerScore;
  } else {
    computerScore++;
  }

  return {computerScore, playerScore};
}

// function to update the number of Rounds to the user
function updateRounds(loopnumber) {
  let displayRound = document.querySelector(".rounds");

  displayRound.textContent = `Round: ${loopnumber} / 5`;
}

// Function to display result from single round game

function displayResultsOnScreen(results) {
  displayResults.textContent = results;
}

// Function to generate a random choice for the computer: rock, paper, or scissors

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

playGame();