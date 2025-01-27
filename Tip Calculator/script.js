// script.js

// Event listener for the "Calculate Tip" button
document.getElementById("calculate").addEventListener("click", () => {
    // Retrieve user inputs
    const billAmount = parseFloat(document.getElementById("bill").value);
    const tipPercentage = parseFloat(document.getElementById("tip").value);
    const numPeople = parseInt(document.getElementById("people").value);
  
    // Validate inputs
    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numPeople) || billAmount <= 0 || tipPercentage <= 0 || numPeople <= 0) {
      alert("Please enter valid numbers for all fields.");
      return;
    }
  
    // Calculate total tip and tip per person
    const totalTip = (billAmount * tipPercentage) / 100;
    const tipPerPerson = totalTip / numPeople;
  
    // Update the results in the HTML
    document.getElementById("totalTip").textContent = `$${totalTip.toFixed(2)}`;
    document.getElementById("tipPerPerson").textContent = `$${tipPerPerson.toFixed(2)}`;
  });
  