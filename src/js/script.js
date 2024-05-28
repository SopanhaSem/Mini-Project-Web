document.addEventListener("DOMContentLoaded", () => {
  const cryptoDropdownButton = document.getElementById("cryptoDropdownButton");
  const cryptoDropdown = document.getElementById("cryptoDropdown");

  cryptoDropdownButton.addEventListener("mouseenter", () => {
    cryptoDropdown.classList.remove("hidden");
  });

  cryptoDropdownButton.addEventListener("mouseleave", () => {
    // Set a timeout to delay the hiding to see if the mouse enters the dropdown
    setTimeout(() => {
      if (!cryptoDropdown.matches(":hover")) {
        cryptoDropdown.classList.add("hidden");
      }
    }, 100);
  });

  cryptoDropdown.addEventListener("mouseleave", () => {
    cryptoDropdown.classList.add("hidden");
  });

  cryptoDropdown.addEventListener("mouseenter", () => {
    cryptoDropdown.classList.remove("hidden");
  });
});
document.getElementById("loginButton").addEventListener("click", function () {
  window.location.href = "/src/screen/login.html";
});
document.getElementById("signUpButton").addEventListener("click", function () {
  window.location.href = "/src/screen/signup.html";
});
//---
document.addEventListener("DOMContentLoaded", () => {
  const cryptoDropdownButton = document.getElementById("exchangeDropdownButton");
  const cryptoDropdown = document.getElementById("exchangeDropdown");

  cryptoDropdownButton.addEventListener("mouseenter", () => {
    cryptoDropdown.classList.remove("hidden");
  });

  cryptoDropdownButton.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!cryptoDropdown.matches(":hover")) {
        cryptoDropdown.classList.add("hidden");
      }
    }, 100);
  });

  cryptoDropdown.addEventListener("mouseleave", () => {
    cryptoDropdown.classList.add("hidden");
  });

  cryptoDropdown.addEventListener("mouseenter", () => {
    cryptoDropdown.classList.remove("hidden");
  });
});