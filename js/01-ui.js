document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

const toggle = document.getElementById("navToggle");
const links = document.querySelector(".nav-links");

if (toggle) {
  toggle.onclick = () => links.classList.toggle("open");
}
