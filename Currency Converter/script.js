// script.js

const convertButton = document.getElementById('convert');
const resultElement = document.getElementById('result');

// Dummy conversion rates
const conversionRates = {
  USD: { USD: 1, EUR: 0.85, INR: 73.5, GBP: 0.74, AUD: 1.34 },
  EUR: { USD: 1.18, EUR: 1, INR: 86.3, GBP: 0.87, AUD: 1.58 },
  INR: { USD: 0.014, EUR: 0.012, INR: 1, GBP: 0.010, AUD: 0.018 },
  GBP: { USD: 1.35, EUR: 1.15, INR: 100.4, GBP: 1, AUD: 1.82 },
  AUD: { USD: 0.75, EUR: 0.63, INR: 55.3, GBP: 0.55, AUD: 1 },
};

convertButton.addEventListener('click', () => {
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;

  if (isNaN(amount) || amount <= 0) {
    resultElement.textContent = 'Please enter a valid amount!';
    resultElement.style.color = '#ff6f61';
    return;
  }

  const rate = conversionRates[fromCurrency][toCurrency];
  const convertedAmount = (amount * rate).toFixed(2);

  resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  resultElement.style.color = '#ffefd5';

  // Add animation to the result
  resultElement.classList.remove('popEffect');
  void resultElement.offsetWidth; // Trigger reflow
  resultElement.classList.add('popEffect');
});

// Add animation keyframes dynamically
document.styleSheets[0].insertRule(`
  @keyframes popEffect {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`, document.styleSheets[0].cssRules.length);
