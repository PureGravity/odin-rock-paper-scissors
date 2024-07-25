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
// function getHumanChoice() {
//     let userHand = prompt('Shoot! [Input Rock, Paper, or Scissors]').toLowerCase();
//     return userHand;
// }

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let result = document.querySelector(".results")
    if (humanChoice == 'rock') {
        if (computerChoice == 'paper') {
            computerScore++;
            result.textContent = 'You lose.'
        } else if (computerChoice == 'scissors') {
            humanScore++;
            result.textContent = 'You win!'
        } else {
            result.textContent = 'Tie!'
        }
    }
    else if (humanChoice == 'paper') {
        if (computerChoice == 'scissors') {
            computerScore++;
            result.textContent = 'You lose.'
        } else if (computerChoice == 'rock') {
            humanScore++;
            result.textContent = 'You win!'
        } else {
            result.textContent = 'Tie!'
        }
    }
    else if (humanChoice == 'scissors') {
        if (computerChoice == 'rock') {
            computerScore++;
            result.textContent = 'You lose.'
        } else if (computerChoice == 'paper') {
            humanScore++;
            result.textContent = 'You win!'
        } else {
            result.textContent = 'Tie!'
        }
    }
}

let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissors = document.querySelector('.scissors')

rock.addEventListener('click', function(){
    playRound('rock', getComputerChoice())
})
paper.addEventListener('click', function(){
    playRound('paper', getComputerChoice())
})
scissors.addEventListener('click', function(){
    playRound('scissors', getComputerChoice())
})
// // Round function. Change number in while loop to add/remove rounds.
// let round = 0;
// while (round < 5) {
//     console.log('Round ' + (round + 1) + ':');
//     const computerSelection = getComputerChoice();
//     const humanSelection = getHumanChoice();
//     playRound(humanSelection, computerSelection);
//     round++;
// }

// // Final score/winner display 
// console.log('\nFinal Scores: ');
// console.log('Computer: ' + computerScore);
// console.log('You: ' + humanScore);

// if (humanScore > computerScore) {
//     console.log('You win!');
// } else if (humanScore < computerScore) {
//     console.log('You lose. Try again?');
// } else {
//     console.log('Tied game!');
// }
