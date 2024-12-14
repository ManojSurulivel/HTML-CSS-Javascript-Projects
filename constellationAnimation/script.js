const canvas = document.getElementById("constellation");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const stars = [];
const connections = [];
function drawStar(x, y) {
ctx.beginPath();
ctx.arc(x, y, 5, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
}
function drawLine(x1, y1, x2, y2) {
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();
}
canvas.addEventListener("click", (e) => {
const rect = canvas.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
stars.push({ x, y });
drawStar(x, y);
if (stars.length > 1) {
const prevStar = stars[stars.length - 2];
connections.push({ x1: prevStar.x, y1: prevStar.y, x2: x, y2: y });
let progress = 0;
function animateLine() {
if (progress > 1) return;
const xCurrent = prevStar.x + (x - prevStar.x) * progress;
const yCurrent = prevStar.y + (y - prevStar.y) * progress;
drawLine(prevStar.x, prevStar.y, xCurrent, yCurrent);
progress += 0.02;
requestAnimationFrame(animateLine);
}
animateLine();
}
});