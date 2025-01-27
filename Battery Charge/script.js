// script.js

const batteryLevel = document.getElementById('batteryLevel');
const chargePercentage = document.getElementById('chargePercentage');
const startCharge = document.getElementById('startCharge');

let currentLevel = 0;
let chargingInterval;

startCharge.addEventListener('click', () => {
  if (chargingInterval) return; // Prevent multiple intervals

  chargingInterval = setInterval(() => {
    if (currentLevel >= 100) {
      clearInterval(chargingInterval);
      chargingInterval = null;
      chargePercentage.textContent = 'Fully Charged! 🔋';
      chargePercentage.style.color = '#32cd32';
      return;
    }

    currentLevel++;
    batteryLevel.style.height = `${currentLevel}%`;
    chargePercentage.textContent = `${currentLevel}%`;
  }, 100); // Adjust speed of charging
});
