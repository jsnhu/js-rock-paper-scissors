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
        return;
        // return playRound(getPlayerChoice(), getComputerChoice());
    } else {
    
        let hasPlayerWon;

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

       
        resultDiv.textContent = createStringForResult(hasPlayerWon, playerSelection, computerSelection);
        // console.log(createStringForResult(hasPlayerWon, playerSelection, computerSelection));
        return hasPlayerWon;
    }

}

function createStringForResult(hasPlayerWon, playerSelection, computerSelection) {
    if (hasPlayerWon) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function game() {
    let computerWins = 0;
    let playerWins = 0;

    while (computerWins < 3 && playerWins < 3) {
        console.log(playerWins + " to " + computerWins);
        hasPlayerWon = playRound(getPlayerChoice(), getComputerChoice());
        if (hasPlayerWon) {
            playerWins++;
        } else {
            computerWins++;
        }
    }
    return 'FINISHED: ' + playerWins + ' to ' + computerWins;
}