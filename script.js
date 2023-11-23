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
        return 'scissor';
    }
}