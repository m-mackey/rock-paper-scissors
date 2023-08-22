function getCpuChoice () {
    const options = ["rock", "paper", "scissors"];

    return options[Math.floor(Math.random() * options.length)]
    
}

function gameRound(playerHand, cpuHand) {
    if (playerHand === cpuHand) {
        return 'tie'
    } else if ((playerHand === 'rock' || playerHand === 'paper') && (cpuHand === 'rock' || cpuHand === 'paper') ){
        // return playerHand === 'paper' ? 'win' : 'lose'
        return playerHand === 'paper' ? onWin(playerHand, cpuHand) : onLose(playerHand, cpuHand);
    } else if ((playerHand === 'paper' || playerHand === 'scissors') && (cpuHand === 'paper' || cpuHand === 'scissors') ){
        // return playerHand === 'scissors' ? 'win' : 'lose'
        return playerHand === 'scissors' ? onWin(playerHand, cpuHand) : onLose(playerHand, cpuHand);
    } else if ((playerHand === 'scissors' || playerHand === 'rock') && (cpuHand === 'scissors' || cpuHand === 'rock') ){
        // return playerHand === 'rock' ? 'win' : 'lose'
        return playerHand === 'rock' ? onWin(playerHand, cpuHand) : onLose(playerHand, cpuHand);
    }  
}

function onWin(playerHand, cpuHand) {
    console.log(`You played ${playerHand}. CPU played ${cpuHand}. You win.`);
    return 'win'    
}

function onLose(playerHand, cpuHand) {
    console.log(`You played ${playerHand}. CPU played ${cpuHand}. You lose`);
    return 'lose'
}