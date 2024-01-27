const choices = ['rock', 'paper', 'scissors'];

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent.toLowerCase(), getComputerChoice())
    });
});

function getComputerChoice() {
    randChoiceIndex = Math.floor(Math.random()*3);
    return choices[randChoiceIndex];
}

function playRound(playerSelection, computerSelection) {
    const resultDiv = document.querySelector('.output-result');

    if (playerSelection == computerSelection) {
        resultDiv.textContent = 'TIE! Play again!';
    } else {
        const hasPlayerWon = determineHasPlayerWon(playerSelection, computerSelection);
       
        resultDiv.textContent = createStringForResult(hasPlayerWon, playerSelection, computerSelection);
        return hasPlayerWon;
    }

}

function determineHasPlayerWon(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            hasPlayerWon = (computerSelection == 'scissors');
            break;
        case 'paper':
            hasPlayerWon = (computerSelection == 'rock');
            break;
        case 'scissors':
            hasPlayerWon = (computerSelection == 'paper');
            break;
        default:
            hasPlayerWon = false;
    }

    return hasPlayerWon;
}

function createStringForResult(hasPlayerWon, playerSelection, computerSelection) {
    if (hasPlayerWon) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}
