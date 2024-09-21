document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const inputAmount = getInputValueBYiD("input-add-money");
    const inputPin = getInputValueBYiD("input-add-pin"); // Fixed pin reference

    // Check if the entered pin is correct
    if (inputPin === 5) {
      const totalAmount = getTextValueBYiD("total-amount");
      const calculateAmount = totalAmount + inputAmount;

      // Update the total amount on the page
      document.getElementById("total-amount").innerText = calculateAmount;

      // Create a new transaction history entry
      const p = document.createElement("p"); // Corrected to create a <p> element
      p.classList.add("text-center");
      p.innerText = `ADD AMMOUNT IS: ${inputAmount} `;

      // Append the transaction history to the #trx-input div
      document.getElementById("trx-input").appendChild(p);

      console.log(p);
    } else {
      alert("Wrong Pin DMG");
    }
  });
