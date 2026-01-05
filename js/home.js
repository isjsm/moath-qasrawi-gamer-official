const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2 + 1,
  dx: (Math.random() - 0.5) * 0.6,
  dy: (Math.random() - 0.5) * 0.6
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#7c3aed";

  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}
animate();

/* ===== Load DATA ===== */
fetch("data/stats.json")
  .then(r => r.json())
  .then(data => {
    document.getElementById("stats").innerHTML =
      data.map(s => `
        <div class="stat">
          <h3>${s.value}</h3>
          <span>${s.label}</span>
        </div>
      `).join("");
  });

fetch("data/social.json")
  .then(r => r.json())
  .then(data => {
    document.getElementById("socials").innerHTML =
      data.map(s => `
        <a href="${s.url}" target="_blank" class="social">
          <div class="icon">${s.icon}</div>
          <strong>${s.name}</strong>
          <span>${s.count}</span>
        </a>
      `).join("");
  });
