const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];
const colors = ['#ff0066', '#ffcc00', '#00ff99', '#0066ff'];
class Particle {
constructor() {
this.x = window.innerWidth / 2;
this.y = window.innerHeight / 2;
this.size = Math.random() * 5 + 1;
this.color = colors[Math.floor(Math.random() * colors.length)];
this.speedX = (Math.random() - 0.5) * 5;
this.speedY = (Math.random() - 0.5) * 5;
this.life = 100;
}
update() {
this.x += this.speedX;
this.y += this.speedY;
this.size *= 0.95;
this.life -= 1;
}
draw() {
ctx.fillStyle = this.color;
ctx.beginPath();
ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
ctx.fill();
}
}
function handleParticles() {
for (let i = 0; i < particlesArray.length; i++) {
particlesArray[i].update();
particlesArray[i].draw();
if (particlesArray[i].life <= 0 || particlesArray[i].size <= 0.2) {
particlesArray.splice(i, 1);
i--;
}
}
}
function createParticles() {
for (let i = 0; i < 5; i++) {
particlesArray.push(new Particle());
}
}
function animate() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
createParticles();
handleParticles();
requestAnimationFrame(animate);
}
animate();