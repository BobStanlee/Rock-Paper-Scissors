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

singleRound();

const results = singleRound();

function singleRound (playerSelect, computerSelection) {
    let countComputer, countPlayer = 0;

    if(playerSelect === computerSelection) {
        return "Its a Draw!, Play Again", countComputer, countPlayer;
    }

    else if (playerSelect === 'rock' && computerSelection === 'scissors'){
        countPlayer ++;
        return "You Win! Rock beats Scissors", countComputer, countPlayer;
    }

    else if (playerSelect === 'rock' && computerSelection === 'paper'){
        countComputer ++;
        return "You Lose! Paper beats rock", countComputer, countPlayer;
    }

    else if (playerSelect === 'paper' && computerSelection === 'rock'){
        countPlayer ++;
        return "You Win! Paper beats rock", countComputer, countPlayer;
    }

    else if (playerSelect === 'paper' && computerSelection === 'scissors'){
        countComputer ++;
        return "You Lose! Scissors beats paper", countComputer, countPlayer;
    }

    else if (playerSelect === 'scissors' && computerSelection === 'rock'){
        countComputer ++;
        return "You Lose! rock beats scissors", countComputer, countPlayer;
    }

    else if (playerSelect === 'scissors' && computerSelection === 'paper'){
        countPlayer ++;
        return "You Win! scissors beats Paper", countComputer, countPlayer;
    }

    return countComputer, countPlayer;
}