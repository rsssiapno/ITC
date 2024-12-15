function calculateResults() {
  const n = parseInt(document.getElementById("nlimit").value);

  if (isNaN(n) || n < 1) {
    alert("Please enter a valid natural number (1 or higher).");
    return;
  }

  // Calculate factorial
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  // Calculate summation
  const sum = (n * (n + 1)) / 2;

  // Calculate average
  const average = sum / n;

  // Display results
  document.getElementById("factorialOutput").textContent = `Factorial: ${factorial}`;
  document.getElementById("sumOutput").textContent = `Summation: ${sum}`;
  document.getElementById("averageOutput").textContent = `Average: ${average}`;
}
