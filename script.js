// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Light/Dark Mode Toggle
const themeButton = document.getElementById("theme-toggle");
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    themeButton.textContent = document.body.classList.contains("light-mode") ? "🌞 Light Mode" : "🌙 Dark Mode";
});
