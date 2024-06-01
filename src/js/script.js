document.addEventListener("DOMContentLoaded", () => {
  const setupDropdown = (buttonId, dropdownId) => {
    const button = document.getElementById(buttonId);
    const dropdown = document.getElementById(dropdownId);

    let hideTimeout;

    button.addEventListener("mouseenter", () => {
      clearTimeout(hideTimeout);
      dropdown.classList.remove("hidden");
    });

    button.addEventListener("mouseleave", () => {
      hideTimeout = setTimeout(() => {
        if (!dropdown.matches(":hover")) {
          dropdown.classList.add("hidden");
        }
      }, 100);
    });

    dropdown.addEventListener("mouseenter", () => {
      clearTimeout(hideTimeout);
      dropdown.classList.remove("hidden");
    });

    dropdown.addEventListener("mouseleave", () => {
      hideTimeout = setTimeout(() => {
        dropdown.classList.add("hidden");
      }, 100);
    });

    // Handle click for mobile view
    button.addEventListener("click", () => {
      dropdown.classList.toggle("hidden");
    });
  };

  setupDropdown("cryptoDropdownButton", "cryptoDropdown");
  setupDropdown("exchangeDropdownButton", "exchangeDropdown");

  // Mobile menu toggle
  const menuButton = document.getElementById("menuButton");
  const navbar = document.getElementById("navbar-cta");

  menuButton.addEventListener("click", () => {
    navbar.classList.toggle("hidden");
  });
});

document.getElementById("loginButton").addEventListener("click", function () {
  window.location.href = "/src/screen/login.html";
});
document.getElementById("signUpButton").addEventListener("click", function () {
  window.location.href = "/src/screen/signup.html";
});
