// Select DOM elements
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Remove active class from all slides
    });
    slides[index].classList.add('active'); // Add active class to the current slide
}

// Function to show the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Increment index, loop to 0 after the last
    showSlide(currentIndex);
}

// Function to show the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Decrement index, loop to the last from 0
    showSlide(currentIndex);
}

// Event listeners for navigation buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Initialize the slider
showSlide(currentIndex);
