const waveText = document.querySelector('.wave-text');
const text = waveText.textContent;
waveText.textContent = '';

[...text].forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.setProperty('--i', index);
    waveText.appendChild(span);
});
