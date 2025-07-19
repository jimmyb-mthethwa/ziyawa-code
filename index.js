document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  function showLogin() {
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
  }

  function showRegister() {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
  }

  // Expose functions globally so the buttons can call them
  window.showLogin = showLogin;
  window.showRegister = showRegister;

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Logged in! Redirecting to dashboard...");
      window.location.href = "dashboard.html";
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Account created! Redirecting to dashboard...");
      window.location.href = "dashboard.html";
    });
  }
});
