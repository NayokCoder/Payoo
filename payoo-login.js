document.getElementById("btn").addEventListener("click", function (event) {
  event.preventDefault();

  const inputPhnNumber = getInputloginValueBYiD("input-login-number");

  const inputPassword = getInputloginValueBYiD("input-login-password");

  if (inputPhnNumber === "017" && inputPassword === "5") {
    window.location.href = "payoo-home.html"; // Redirect to home page
  } else {
    alert("Invalid login details");
  }
});
