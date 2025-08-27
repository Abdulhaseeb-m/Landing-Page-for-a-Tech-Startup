// Initialize AOS animations
AOS.init({
  duration: 1000,
  once: true,
});

// Simple form submit action (demo)
document.querySelector("form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});
