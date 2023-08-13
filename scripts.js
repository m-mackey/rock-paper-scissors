function getCpuChoice () {
    const options = ["rock", "paper", "scissors"];

    return options[Math.floor(Math.random() * options.length)]
    
}

function playRounds(playerSelection, cpuSelection) {
    switch (playerSelection, cpuSelection) {
        case playerSelection == cpuSelection:
            console.log("a tie");
            break;
    
        default:
            console.log("didn't work");
            break;
    }
}