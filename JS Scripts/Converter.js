function convert() {
    const conversionType = document.getElementById("conversion-select").value;
    const inputValue = parseFloat(document.getElementById("input-value").value);
    let result = " ";

    if (!isNaN(inputValue)) {
        switch (conversionType) {
            case "c-to-f":
                result = (inputValue * 9/5) + 32; // Celsius to Fahrenheit
                break;
            case "f-to-c":
                result = (inputValue - 32) * 5/9; // Fahrenheit to Celsius
                break;
            case "m-to-ft":
                result = inputValue * 3.28084; // Meters to Feet
                break;
            case "ft-to-m":
                result = inputValue / 3.28084; // Feet to Meters
                break;
        }
    }

    document.getElementById("result").textContent = `${result.toFixed(2)}`;
}