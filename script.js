function getComputerChoice() {
    let botHand = Math.random().toFixed(2);
    if (botHand > 0.66) {
        return 'rock';
    } else if (botHand > 0.33) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

const computerSelection = getComputerChoice()
// console.log(getComputerChoice());

function getHumanChoice() {
    let userHand = prompt('Shoot! [Input Rock, Paper, or Scissors]');
    return userHand;
}

const humanSelection = getHumanChoice().toLowerCase()
// console.log(getHumanChoice());


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let round = 0
    while (round < 5) {
        if (humanChoice == 'rock') {
            if (computerChoice == 'paper') {
                computerScore++;
                console.log('You lose.')
            } else if (computerChoice == 'scissors') {
                humanScore++;
                console.log('You win!');
            } else {
                console.log('Tie!');
            }
        }
        else if (humanChoice == 'paper') {
            if (computerChoice == 'scissors') {
                computerScore++;
                console.log('You lose.');
            } else if (computerChoice == 'rock') {
                humanScore++;
                console.log('You win!');
            } else {
                console.log('Tie!');
            }
        }
        else if (humanChoice == 'scissors') {
            if (computerChoice == 'rock') {
                computerScore++;
                console.log('You lose.');
            } else if (computerChoice == 'paper') {
                humanScore++;
                console.log('You win!');
            } else {
                console.log('Tie!');
            }
        }
        round++
    }
}

console.log(playRound(humanSelection, computerSelection))