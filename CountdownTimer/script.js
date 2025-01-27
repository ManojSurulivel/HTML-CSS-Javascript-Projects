// script.js

// Set the target date and time
const targetDate = new Date("Jan 20, 2025 00:00:00").getTime();

// Function to update the countdown timer
function updateTimer() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft >= 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = formatNumber(days);
    document.getElementById("hours").textContent = formatNumber(hours);
    document.getElementById("minutes").textContent = formatNumber(minutes);
    document.getElementById("seconds").textContent = formatNumber(seconds);
  } else {
    clearInterval(timerInterval);
    document.querySelector(".container").innerHTML = "<h1>Countdown Completed!</h1>";
  }
}

// Helper function to format numbers (add leading zero if needed)
function formatNumber(num) {
  return num < 10 ? `0${num}` : num;
}

// Update the timer every second
const timerInterval = setInterval(updateTimer, 1000);

// Initial call to show the timer immediately
updateTimer();
