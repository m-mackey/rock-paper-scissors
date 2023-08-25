let round = 0;
let playerScore = 0;
let cpuScore = 0;
    
function game() {
    
    while (round < 5){
        let playerHand = prompt('Rock, paper, or scissors?').toLowerCase();
        //write something here to re=prompt if not rock paper or scissors
        gameRound(playerHand, getCpuChoice());
        round++;
        console.log(round);
    }
    
}




function getCpuChoice () {
    const options = ['rock', 'paper', 'scissors'];

    return options[Math.floor(Math.random() * options.length)];
    
}

function gameRound(playerHand, cpuHand) {

    if (playerHand === cpuHand) {
        return result('tie', playerHand, cpuHand);
    } else if ((playerHand === 'rock' || playerHand === 'paper') && (cpuHand === 'rock' || cpuHand === 'paper') ){
        return playerHand === 'paper' ? result('win', playerHand, cpuHand) : result('lose', playerHand, cpuHand);
    } else if ((playerHand === 'paper' || playerHand === 'scissors') && (cpuHand === 'paper' || cpuHand === 'scissors') ){
        return playerHand === 'scissors' ? result('win', playerHand, cpuHand) : result('lose', playerHand, cpuHand);
    } else if ((playerHand === 'scissors' || playerHand === 'rock') && (cpuHand === 'scissors' || cpuHand === 'rock') ){
        return playerHand === 'rock' ? result('win', playerHand, cpuHand) : result('lose', playerHand, cpuHand);
    }  
}

function result(outcome, playerHand, cpuHand) {
    switch (outcome) {
        case 'tie':
            console.log(`You played ${playerHand}. CPU played ${cpuHand}. It's a tie!`);
            break;
        case 'win':
            playerScore++;
            console.log(`You played ${playerHand}. CPU played ${cpuHand}. You win.`);
            break;
        case 'lose':
            cpuScore++;
            console.log(`You played ${playerHand}. CPU played ${cpuHand}. You lose.`);
            break;
        default:
            break;
    }
}