document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (event) {
    var emailInput = document.getElementById("email");
    var email = document.getElementById("email").value;

    var errorMessage = document.getElementById("error-msg");
    var inputedEmail = document.getElementById("inputed-email");

    var modal = document.getElementById("success-modal");
    var dismissBtn = document.getElementById("dismiss-message");

    if (!emailInput.checkValidity() || emailInput.value.trim() === "") {
      errorMessage.textContent = "Valid email required";
      event.preventDefault();
    } else {
      errorMessage.textContent = "";
      event.preventDefault();

      modal.style.display = "block";
      inputedEmail.textContent = email;
    }

    dismissBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });
