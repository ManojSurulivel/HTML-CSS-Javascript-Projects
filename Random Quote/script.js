// script.js

// Array of random quotes
const quotes = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "If opportunity doesn’t knock, build a door.", author: "Milton Berle" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Anonymous" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  ];
  
  // DOM elements
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  const newQuoteButton = document.getElementById("new-quote");
  
  // Function to generate a random quote
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = `"${randomQuote.text}"`;
    authorElement.textContent = `— ${randomQuote.author}`;
  }
  
  // Event listener for button
  newQuoteButton.addEventListener("click", () => {
    generateRandomQuote();
  
    // Add animation to quote box
    const quoteBox = document.querySelector(".quote-box");
    quoteBox.classList.remove("zoomEffect");
    void quoteBox.offsetWidth; // Trigger reflow
    quoteBox.classList.add("zoomEffect");
  });
  
  // Smooth zoom animation for new quotes
  document.querySelector(".quote-box").classList.add("zoomEffect");
  
  /* Add smooth animation */
  