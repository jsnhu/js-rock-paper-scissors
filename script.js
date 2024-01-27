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
    const firstMsg = document.querySelector('.first-msg');
    const secondMsg = document.querySelector('.second-msg');

    if (playerSelection == computerSelection) {
        firstMsg.textContent = "you tied";
        secondMsg.textContent = "play again";
    } else {
        // DOM
        const playerScoreText = document.querySelector('#player-score');
        const computerScoreText = document.querySelector('#computer-score');

        const hasPlayerWon = determineHasPlayerWon(playerSelection, computerSelection);
       
        // resultDiv.textContent = createStringForResult(hasPlayerWon, playerSelection, computerSelection);
        firstMsg.textContent = createResultFirstMsg(hasPlayerWon, playerSelection, computerSelection);
        secondMsg.textContent = createResultSecondMsg(hasPlayerWon, playerSelection, computerSelection);

        if (hasPlayerWon) {
            playerScoreText.textContent = parseInt(playerScoreText.textContent) + 1; 
        } else {
            computerScoreText.textContent = parseInt(computerScoreText.textContent) + 1;
        }
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

function createResultFirstMsg(hasPlayerWon, playerSelection, computerSelection) {
    if (hasPlayerWon) {
        return "you win ";
    } else {
        return "you lost ";
    }
}

function createResultSecondMsg(hasPlayerWon, playerSelection, computerSelection) {
    if (hasPlayerWon) {
        return playerSelection + " beats " + computerSelection;
    } else {
        return playerSelection + " loses to " + computerSelection;
    }
}