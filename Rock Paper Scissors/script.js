// script.js

const choices = document.querySelectorAll('.choice');
const resultMessage = document.getElementById('result-message');
const playAgainButton = document.getElementById('play-again');

const gameChoices = ['rock', 'paper', 'scissors'];

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * gameChoices.length);
  return gameChoices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'It\'s a draw!';
  }
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win! 🎉';
  }
  return 'You lose! 😢';
}

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const playerChoice = choice.dataset.choice;
    const computerChoice = getRandomChoice();
    const result = determineWinner(playerChoice, computerChoice);

    resultMessage.textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
  });
});

playAgainButton.addEventListener('click', () => {
  resultMessage.textContent = 'Make your move!';
});
