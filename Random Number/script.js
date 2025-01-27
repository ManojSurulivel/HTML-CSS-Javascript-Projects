// script.js

const generateButton = document.getElementById('generate');
const resultElement = document.getElementById('result');

generateButton.addEventListener('click', () => {
  const min = parseInt(document.getElementById('min').value);
  const max = parseInt(document.getElementById('max').value);

  if (isNaN(min) || isNaN(max) || min >= max) {
    resultElement.textContent = 'Please enter valid numbers!';
    resultElement.style.color = 'red';
    return;
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  resultElement.textContent = `🎲 Your Random Number: ${randomNumber}`;
  resultElement.style.color = '#ffefd5';

  // Add animation to result text
  resultElement.classList.remove('zoomEffect');
  void resultElement.offsetWidth; // Trigger reflow
  resultElement.classList.add('zoomEffect');
});

// Smooth zoom animation for result
resultElement.classList.add('zoomEffect');

/* Add this CSS in JS */
document.styleSheets[0].insertRule(`
  @keyframes zoomEffect {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`, document.styleSheets[0].cssRules.length);
