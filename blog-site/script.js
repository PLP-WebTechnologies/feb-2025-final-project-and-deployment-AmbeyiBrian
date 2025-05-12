// Toggle dark mode
const toggleButton = document.getElementById("toggleTheme");
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  });
}

// Apply saved theme on load
window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});

// Contact form submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("confirmation").style.display = "block";
    contactForm.reset();
  });
}
