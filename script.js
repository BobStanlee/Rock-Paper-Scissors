function getComputerChoice () {
    let randomValue;
    randomValue = Math.floor(Math.random() * 3) + 1; // Generates a random integer between 1 and 3

    if (randomValue == 1) {
        return 'rock';
    }

    else if (randomValue == 2) {
        return 'paper';
    }

    else if (randomValue == 3) {
        return 'scissors';
    }
}

let playerSelect = (prompt('Enter your choice: eg; rock, paper and scissors')).toLowerCase();

let computerSelection = getComputerChoice();

const roundResult = singleRound(playerSelect, computerSelection);
console.log(roundResult.result);

function singleRound(playerSelect, computerSelection) {
    let countComputer = 0;
    let countPlayer = 0;
    let result = "";

    if (playerSelect === computerSelection) {
        result = "It's a Draw! Play Again";
    } else if (playerSelect === 'rock' && computerSelection === 'scissors'){
        countPlayer++;
        result = "You Win! Rock beats Scissors";
    } else if (playerSelect === 'rock' && computerSelection === 'paper'){
        countComputer++;
        result = "You Lose! Paper beats Rock";
    } else if (playerSelect === 'paper' && computerSelection === 'rock'){
        countPlayer++;
        result = "You Win! Paper beats Rock";
    } else if (playerSelect === 'paper' && computerSelection === 'scissors'){
        countComputer++;
        result = "You Lose! Scissors beats Paper";
    } else if (playerSelect === 'scissors' && computerSelection === 'rock'){
        countComputer++;
        result = "You Lose! Rock beats Scissors";
    } else if (playerSelect === 'scissors' && computerSelection === 'paper'){
        countPlayer++;
        result = "You Win! Scissors beats Paper";
    }

    return { result, countComputer, countPlayer };
}