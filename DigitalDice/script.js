const dice = document.getElementById('dice');
const diceFaces = [
[4],
[0, 8],
[0, 4, 8],
[0, 2, 6, 8],
[0, 2, 4, 6, 8],
[0, 1, 2, 6, 7, 8]
];
function createDots(face) {
dice.innerHTML = '';
for (let i = 0; i < 9; i++) {
const dot = document.createElement('div');
if (face.includes(i)) {
dot.classList.add('dot');
}
dice.appendChild(dot);
}
}
function rollDice() {
dice.style.transform = 'rotate(720deg)';
setTimeout(() => {
const randomFace = Math.floor(Math.random() * 6);
createDots(diceFaces[randomFace]);
dice.style.transform = 'rotate(0)';
}, 600);
}
createDots(diceFaces[0]);