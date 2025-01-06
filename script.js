document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const emailInput = document.getElementById("email");
    const errorMsg = document.getElementById("error-msg");
    const email = emailInput.value.trim();

    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errorMsg.textContent = "Email address is required.";
    } else if (!emailRegex.test(email)) {
      errorMsg.textContent = "Please enter a valid email address.";
    } else {
      errorMsg.textContent = "";
      document.getElementById("inputed-email").textContent = email;
      document.getElementById("success-modal").style.display = "block";
    }
  });

// Dismiss the success message
document
  .getElementById("dismiss-message")
  .addEventListener("click", function () {
    document.getElementById("success-modal").style.display = "none";
  });
