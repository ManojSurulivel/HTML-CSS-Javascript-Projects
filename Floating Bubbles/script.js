const container = document.querySelector('.bubble-container');

// Generate Random Bubbles
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    container.appendChild(bubble);

    // Randomize Bubble Properties
    const size = Math.random() * 60 + 20; // Bubble size (20px - 80px)
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 3 + 5}s`; // Float speed (5s - 8s)
    bubble.style.animationDelay = `${Math.random() * 3}s`; // Random start delay

    // Remove Bubble When Animation Ends
    bubble.addEventListener('animationend', () => bubble.remove());

    // Pop Bubble on Click
    bubble.addEventListener('click', () => {
        bubble.style.animation = 'none';
        bubble.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 1), rgba(255, 0, 0, 0.8))';
        bubble.style.transform = 'scale(0)';
        setTimeout(() => bubble.remove(), 500);
    });
}

// Continuously Generate Bubbles
setInterval(createBubble, 300);
