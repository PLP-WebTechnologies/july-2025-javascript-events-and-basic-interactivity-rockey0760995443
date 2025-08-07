// -------------------------------
// Part 1: Event Handling & Interactive Elements
// -------------------------------

// Theme toggle feature
const themeToggleBtn = document.getElementById("theme-toggle-btn");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Simple counter feature
const decrementBtn = document.getElementById("decrement-btn");
const incrementBtn = document.getElementById("increment-btn");
const counterValue = document.getElementById("counter-value");

let count = 0;

decrementBtn.addEventListener("click", () => {
  count--;
  updateCounter();
});

incrementBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

function updateCounter() {
  counterValue.textContent = count;
}

// -------------------------------
// Part 2: Custom Form Validation
// -------------------------------

const form = document.getElementById("signup-form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  clearErrors();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;

  let isValid = true;

  // Validate Name (required and at least 2 chars)
  if (name.length < 2) {
    showError("name-error", "Name must be at least 2 characters.");
    isValid = false;
  }

  // Validate Email (simple regex)
  if (!validateEmail(email)) {
    showError("email-error", "Please enter a valid email.");
    isValid = false;
  }

  // Validate Password (min 6 chars, at least one number)
  if (!validatePassword(password)) {
    showError(
      "password-error",
      "Password must be at least 6 characters and include a number."
    );
    isValid = false;
  }

  if (isValid) {
    document.getElementById("form-success").textContent =
      "Form submitted successfully!";
    form.reset();
  } else {
    document.getElementById("form-success").textContent = "";
  }
});

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
}

function clearErrors() {
  const errors = document.querySelectorAll(".error-message");
  errors.forEach((error) => (error.textContent = ""));
}

// Simple email validation regex
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Password must be at least 6 characters and contain at least one digit
function validatePassword(password) {
  const re = /^(?=.*\d).{6,}$/;
  return re.test(password);
}
