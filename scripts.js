let playerScore = 0;
let cpuScore = 0;

document.querySelector(
  '#user-score'
).textContent = `Player Score: ${playerScore}`;

document.querySelector(
  '#cpu-score'
).textContent = `Computer Score: ${cpuScore}`;

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    gameRound(btn.textContent, cpuHand());
  });
});

let cpuHand = () => {
  const options = ['rock', 'paper', 'scissors'];

  return options[Math.floor(Math.random() * options.length)];
};

function gameRound(playerHand, cpuHand) {
  if (playerHand === cpuHand) {
    return result('tie', playerHand, cpuHand);
  } else if (
    (playerHand === 'rock' || playerHand === 'paper') &&
    (cpuHand === 'rock' || cpuHand === 'paper')
  ) {
    return playerHand === 'paper'
      ? result('win', playerHand, cpuHand)
      : result('lose', playerHand, cpuHand);
  } else if (
    (playerHand === 'paper' || playerHand === 'scissors') &&
    (cpuHand === 'paper' || cpuHand === 'scissors')
  ) {
    return playerHand === 'scissors'
      ? result('win', playerHand, cpuHand)
      : result('lose', playerHand, cpuHand);
  } else if (
    (playerHand === 'scissors' || playerHand === 'rock') &&
    (cpuHand === 'scissors' || cpuHand === 'rock')
  ) {
    return playerHand === 'rock'
      ? result('win', playerHand, cpuHand)
      : result('lose', playerHand, cpuHand);
  }
}

function result(outcome, playerHand, cpuHand) {
  const roundResult = document.querySelector('.round-result');

  switch (outcome) {
    case 'tie':
      roundResult.textContent = `You played ${playerHand}. CPU played ${cpuHand}. It's a tie!`;
      break;
    case 'win':
      playerScore += 1;
      document.querySelector(
        '#user-score'
      ).textContent = `Player Score: ${playerScore}`;
      roundResult.textContent = `You played ${playerHand}. CPU played ${cpuHand}. You win this round.`;
      break;
    case 'lose':
      cpuScore += 1;
      document.querySelector(
        '#cpu-score'
      ).textContent = `Computer Score: ${cpuScore}`;
      roundResult.textContent = `You played ${playerHand}. CPU played ${cpuHand}. You lose this round.`;
      break;
  }

  scoreCheck();
}

const btnSection = document.querySelector('.btn-group');
const winner = document.querySelector('.winner');

function scoreCheck() {
  if (playerScore === 5 || cpuScore === 5) {
    btnSection.textContent = '';
    if (playerScore === 5) {
      winner.textContent = 'You win the game!';
    } else if (cpuScore === 5) {
      winner.textContent = 'Computer wins the game!';
    }
  }
}
