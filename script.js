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
    let result = document.querySelector('.results p');
    let score = document.querySelector('.scoreTrack');

    // Update scores based on choices
    if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerScore++;
            result.textContent = 'You lose.';
        } else if (computerChoice === 'scissors') {
            humanScore++;
            result.textContent = 'You win!';
        } else {
            result.textContent = 'Tie!';
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore++;
            result.textContent = 'You lose.';
        } else if (computerChoice === 'rock') {
            humanScore++;
            result.textContent = 'You win!';
        } else {
            result.textContent = 'Tie!';
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            result.textContent = 'You lose.';
        } else if (computerChoice === 'paper') {
            humanScore++;
            result.textContent = 'You win!';
        } else {
            result.textContent = 'Tie!';
        }
    }

    // Update the score display
    let playDescription = `You chose ${humanChoice}<br>The bot chose ${computerChoice}<br><br>Score: ${humanScore} to ${computerScore}`;
    score.innerHTML = playDescription;

    let leadDesc = document.createElement('p')
    leadDesc.innerHTML = ''
    if (humanScore == computerScore){
        leadDesc.textContent = 'The game is tied.';
    } else if (humanScore > computerScore){
        leadDesc.textContent = 'You are in the lead!';
    } else {
        leadDesc.textContent = 'The bot is in the lead!';
    }
    score.appendChild(leadDesc)
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