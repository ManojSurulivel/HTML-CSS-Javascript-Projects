// script.js

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const isAM = hours < 12;
  
    // Convert 24-hour format to 12-hour format
    hours = hours % 12 || 12;
  
    // Format numbers to add leading zeros
    const formatTime = (time) => (time < 10 ? `0${time}` : time);
  
    document.getElementById("hours").textContent = formatTime(hours);
    document.getElementById("minutes").textContent = formatTime(minutes);
    document.getElementById("seconds").textContent = formatTime(seconds);
    document.getElementById("ampm").textContent = isAM ? "AM" : "PM";
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initialize the clock immediately
  updateClock();
  