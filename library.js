function getInputValueBYiD(id) {
  const takeInput = parseFloat(document.getElementById(id).value);
  return takeInput;
}
function getTextValueBYiD(id) {
  const takeText = parseFloat(document.getElementById(id).innerText);
  return takeText;
}
function getInputloginValueBYiD(id) {
  const takeInput = document.getElementById(id).value;
  return takeInput;
}

function showSection(id) {
  // Hide all sections by adding the 'hidden' class
  document.getElementById("add-money-part").classList.add("hidden");
  document.getElementById("cash-out-part").classList.add("hidden");
  document.getElementById("trx-part").classList.add("hidden");

  // Show the desired section by removing the 'hidden' class
  document.getElementById(id).classList.remove("hidden");
}
