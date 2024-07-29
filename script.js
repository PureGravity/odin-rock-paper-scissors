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

let humanScore = 0;
let computerScore = 0;

function endGame(){
    let finalResult = document.querySelector('.results p')
    let leftContent = document.querySelector('.rules p')
    let rightContent = document.querySelector('.scoreTrack p')
    
    let buttons = document.querySelectorAll('.buttons li')

    buttons.forEach(function(button){
        button.remove()
    });
    leftContent.textContent = ''
    rightContent.textContent = ''
    if (humanScore > computerScore){
        finalResult.textContent = "Congrats! You've reached 5 wins first!"
    } else {
        finalResult.textContent = "The bot reached 5 wins first. Try again?"
    }
}

function playRound(humanChoice, computerChoice) {
    let result = document.querySelector('.results p');
    let score = document.querySelector('.scoreTrack');


    // Update scores based on choices
    if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerScore++;
            console.log(computerScore)
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

    // Add lead description
    let leadDesc = document.createElement('p')
    leadDesc.innerHTML = ''
    if (humanScore == computerScore){
        leadDesc.textContent = 'The game is tied.';
        leadDesc.style.color = 'yellow'
    } else if (humanScore > computerScore){
        leadDesc.textContent = 'You are in the lead!';
        leadDesc.style.color = 'green'
    } else {
        leadDesc.textContent = 'The bot is in the lead!';
        leadDesc.style.color = 'darkRed'
    }

    score.appendChild(leadDesc)

    if (humanScore >= 5 || computerScore >= 5) {
        console.log('Human: ',humanScore)
        console.log('Bot:', computerScore)
        endGame()
        return;
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


let buttons = document.querySelectorAll('.buttons li')
buttons.forEach(function(button){
    button.addEventListener('mouseover',function(){
        button.style.color = '#ebcfc6';
    });
    button.addEventListener('mouseout', function(){
        button.style.color = '';
    });
});