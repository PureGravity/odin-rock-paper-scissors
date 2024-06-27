function getComputerChoice() {
    let botHand = Math.random().toFixed(2)
    if (botHand > 0.66) {
        return 'Rock!';
    } else if (botHand > 0.33) {
        return 'Paper!';
    } else {
        return 'Scissors!';
    }
}

console.log(getComputerChoice())

function getHumanChoice() {
    let userHand = prompt('Shoot! [Input Rock, Paper, or Scissors]')
    return userHand;
}

console.log(getHumanChoice())