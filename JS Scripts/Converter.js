function convertToFahrenheit() {
    const celsius = document.getElementById('celsius').value;
    if (celsius === '') {
        alert('Please enter a Celsius value.');
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('resultF').textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
}

function convertToCelsius() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    if (fahrenheit === '') {
        alert('Please enter a Fahrenheit value.');
        return;
    }
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('resultC').textContent = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
}