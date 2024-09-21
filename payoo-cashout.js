document
  .getElementById("btn-cashout")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Get the input amount and pin
    const inputAmount = getInputValueBYiD("input-cashout-amount");
    const inputPin = getInputValueBYiD("input-cashout-pin");

    // Check if the pin is correct
    if (inputPin === 5) {
      // Get the total amount and calculate the new amount
      const totalAmount = getTextValueBYiD("total-amount");
      const calculateAmount = totalAmount - inputAmount;

      // Update the total amount on the page
      document.getElementById("total-amount").innerText = calculateAmount;

      // Create a new transaction history entry
      const p = document.createElement("p");
      p.classList.add("text-center");
      p.innerText = `CASH OUT Amount IS: ${inputAmount} `;

      // Append the new entry to the transaction history section
      document.getElementById("trx-input").appendChild(p);
    } else {
      alert("Wrong Pin DMG");
    }
  });
