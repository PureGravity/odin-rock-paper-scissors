// Generates and returns a random choice of 'rock', 'paper', or 'scissors' for the computer.
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

// Returns the user's choice of 'rock', 'paper', or 'scissors'.
function getHumanChoice() {
    let userHand = prompt('Shoot! [Input Rock, Paper, or Scissors]').toLowerCase();
    return userHand;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
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
}

// Round function. Change number in while loop to add/remove rounds.
let round = 0
while (round < 5) {
    console.log('Round ' + (round + 1) + ':')
    const computerSelection = getComputerChoice()
    const humanSelection = getHumanChoice()
    playRound(humanSelection, computerSelection)
    round++
}

// Final score/winner display 
console.log('\nFinal Scores: ')
console.log('Computer: ' + computerScore)
console.log('You: ' + humanScore)

if (humanScore > computerScore) {
    console.log('You win!')
} else if (humanScore < computerScore) {
    console.log('You lose. Try again?')
} else [
    console.log('Tied game!')
]