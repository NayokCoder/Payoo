document.getElementById("add-sec").addEventListener("click", function (even) {
  even.preventDefault();
  showSection("add-money-part");
});

document.getElementById("out-sec").addEventListener("click", function (even) {
  even.preventDefault();
  showSection("cash-out-part");
});

document.getElementById("trx-sec").addEventListener("click", function (even) {
  even.preventDefault();
  showSection("trx-part");
});

document.getElementById("log-out").addEventListener("click", function (event) {
  event.preventDefault();

  // Clear the login status
  sessionStorage.removeItem("isLoggedIn"); // Or use localStorage if applicable

  // Redirect to the login page
  window.location.href = "payoo-login.html";
});
