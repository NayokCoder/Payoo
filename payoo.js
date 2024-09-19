document.getElementById("btn").addEventListener("click", function () {
  const inputNumber = document.getElementById("input-number").value;
  const inputPassword = document.getElementById("input-password").value;

  if (inputNumber === "017" && inputPassword === "5") {
    window.location.href = "./payoo2/payoo2.html";
  } else {
    console.log("Invalid login details");
  }
});
