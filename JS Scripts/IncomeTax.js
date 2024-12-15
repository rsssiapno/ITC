function incomeTax() {
    let taxableIncome = document.getElementById("taxableIncome").value * 1; // Input value
    let tax = 0;

    // Tax calculation logic
    if (taxableIncome <= 250000) {
        tax = 0;
    } else if (taxableIncome > 250000 && taxableIncome <= 400000) {
        tax = (taxableIncome - 250000) * 0.20;
    } else if (taxableIncome > 400000 && taxableIncome <= 800000) {
        tax = 30000 + ((taxableIncome - 400000) * 0.25);
    } else if (taxableIncome > 800000 && taxableIncome <= 2000000) {
        tax = 130000 + ((taxableIncome - 800000) * 0.30);
    } else if (taxableIncome > 2000000 && taxableIncome <= 8000000) {
        tax = 490000 + ((taxableIncome - 2000000) * 0.32);
    } else {
        tax = 2410000 + ((taxableIncome - 8000000) * 0.35);
    }

    // Display tax result in the Tax Payable field
    tax = tax.toFixed(2);
    document.getElementById("taxPayable").value = tax;
}

