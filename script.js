
function calculateBMI() {
    // Get input values
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
  
    // Calculate BMI
    var bmi = weight / ((height / 100) ** 2);
  
    // Display result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
  
    // Add BMI category based on WHO guidelines
    var category;
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
  
    resultElement.innerHTML += `<br><strong>Category:</strong> ${category}`;
  }