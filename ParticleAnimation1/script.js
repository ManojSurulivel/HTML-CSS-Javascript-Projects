const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const mouse = {
  x: null,
  y: null,
  radius: 150,
};

window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener("click", () => {
  for (let i = 0; i < 50; i++) {
    createParticle(mouse.x, mouse.y);
  }
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

class Particle {
  constructor(x, y, size, color, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  update() {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.speedY = -this.speedY * 0.9;
    } else {
      this.speedY += 0.1;
    }

    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouse.radius) {
      const angle = Math.atan2(dy, dx);
      const force = (mouse.radius - distance) / mouse.radius;
      const forceX = force * Math.cos(angle);
      const forceY = force * Math.sin(angle);

      this.speedX -= forceX;
      this.speedY -= forceY;
    }

    this.x += this.speedX;
    this.y += this.speedY;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function createParticle(x, y) {
  const size = Math.random() * 5 + 2;
  const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  const speedX = Math.random() * 4 - 2;
  const speedY = Math.random() * 4 - 2;

  particlesArray.push(new Particle(x, y, size, color, speedX, speedY));
}

function connectParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    for (let j = i + 1; j < particlesArray.length; j++) {
      const dx = particlesArray[i].x - particlesArray[j].x;
      const dy = particlesArray[i].y - particlesArray[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
        ctx.lineWidth = 1;
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
      }
    }
  }
}

function initParticles() {
  particlesArray.length = 0;
  for (let i = 0; i < 100; i++) {
    createParticle(Math.random() * canvas.width, Math.random() * canvas.height);
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach((particle) => {
    particle.update();
    particle.draw();
  });
  connectParticles();
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();
