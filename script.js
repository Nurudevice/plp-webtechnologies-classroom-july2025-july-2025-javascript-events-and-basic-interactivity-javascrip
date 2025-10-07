// Part 1: Event Handling

// Click event
document.getElementById("clickMeBtn").addEventListener("click", () => {
  document.getElementById("clickMessage").textContent = "Button clicked! 🎉";
});

// Mouseover and mouseout events
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  document.getElementById("hoverMessage").textContent = "You're hovering! 😄";
});
hoverBox.addEventListener("mouseout", () => {
  document.getElementById("hoverMessage").textContent = "";
});

// Keyboard input event
const keyInput = document.getElementById("keypressInput");
keyInput.addEventListener("keyup", (event) => {
  document.getElementById("keypressOutput").textContent =
    `You typed: ${event.target.value}`;
});

// Part 2: Interactive Elements

// 1️⃣ Light/Dark Mode Toggle
const themeBtn = document.getElementById("themeToggleBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Toggle Light Mode"
    : "🌙 Toggle Dark Mode";
});

// 2️⃣ Counter Game
let count = 0;
const counterDisplay = document.getElementById("counterValue");

document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count;
});

// Part 3: Form Validation

// Get elements
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("formSuccess");

// Validation function
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;
  successMessage.textContent = "";

  // Name validation
  if (nameInput.value.trim() === "") {
    showError("nameError", "Name is required.");
    valid = false;
  } else {
    clearError("nameError");
  }

  // Email validation using regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value)) {
    showError("emailError", "Enter a valid email address.");
    valid = false;
  } else {
    clearError("emailError");
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    showError("passwordError", "Password must be at least 6 characters.");
    valid = false;
  } else {
    clearError("passwordError");
  }

  if (valid) {
    successMessage.textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});

// Helper functions
function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearError(id) {
  document.getElementById(id).textContent = "";
}
