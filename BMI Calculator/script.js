// script.js
const bmiForm = document.getElementById('bmiForm');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const resultContainer = document.getElementById('resultContainer');
const bmiValueElement = document.getElementById('bmiValue');
const bmiCategoryElement = document.getElementById('bmiCategory');

bmiForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(heightInput.value) / 100; // Convert cm to meters
  const weight = parseFloat(weightInput.value);

  if (height && weight) {
    const bmi = (weight / (height * height)).toFixed(1);
    bmiValueElement.textContent = bmi;

    if (bmi < 18.5) {
      bmiCategoryElement.textContent = 'Underweight';
      bmiCategoryElement.style.color = '#ff6b6b';
    } else if (bmi < 24.9) {
      bmiCategoryElement.textContent = 'Normal weight';
      bmiCategoryElement.style.color = '#27ae60';
    } else if (bmi < 29.9) {
      bmiCategoryElement.textContent = 'Overweight';
      bmiCategoryElement.style.color = '#f39c12';
    } else {
      bmiCategoryElement.textContent = 'Obese';
      bmiCategoryElement.style.color = '#e74c3c';
    }

    resultContainer.style.display = 'block';
  } else {
    alert('Please enter valid height and weight values!');
  }
});
