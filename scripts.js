function getCpuChoice () {
    const options = ["rock", "paper", "scissors"];

    return options[Math.floor(Math.random() * options.length)]
    
}

function gameRound(playerHand, cpuHand) {
    if (playerHand === cpuHand) {
        return 'tie'
    } else if ((playerHand === 'rock' || playerHand === 'paper') && (cpuHand === 'rock' || cpuHand === 'paper') ){
        return playerHand === 'paper' ? 'win' : 'lose'
    } else if ((playerHand === 'paper' || playerHand === 'scissors') && (cpuHand === 'paper' || cpuHand === 'scissors') ){
        return playerHand === 'scissors' ? 'win' : 'lose'
    } else if ((playerHand === 'scissors' || playerHand === 'rock') && (cpuHand === 'scissors' || cpuHand === 'rock') ){
        return playerHand === 'rock' ? 'win' : 'lose'
    }  
}