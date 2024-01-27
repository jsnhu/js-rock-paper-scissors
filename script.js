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
        // DOM
        const playerScoreText = document.querySelector('#player-score');
        const computerScoreText = document.querySelector('#computer-score');

        const hasPlayerWon = determineHasPlayerWon(playerSelection, computerSelection);
       
        resultDiv.textContent = createStringForResult(hasPlayerWon, playerSelection, computerSelection);
        

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

function createStringForResult(hasPlayerWon, playerSelection, computerSelection) {
    if (hasPlayerWon) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}
