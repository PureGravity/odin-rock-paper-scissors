function getComputerChoice() {
    let hand = Math.random().toFixed(2)
    if (hand > 0.66) {
        return 'Rock!'
    } else if (hand > 0.33) {
        return 'Paper!'
    } else {
        return 'Scissors!'
    }
}

console.log(getComputerChoice())