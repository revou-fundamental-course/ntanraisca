const temperatureForm = document.getElementById('temperature-form');
const temperatureInput = document.getElementById('temperature');
const unitFromSelect = document.getElementById('unit-from');
const conversionResult = document.getElementById('conversion-result');
const convertedValue = document.getElementById('converted-value');
const convertedUnit = document.getElementById('converted-unit');

temperatureForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const temperature = parseFloat(temperatureInput.value);
  const unitFrom = unitFromSelect.value;

  // Validation: Check if temperature is a number
  if (isNaN(temperature)) {
    alert('Please enter a valid number for temperature.');
    return;
  }

  let convertedTemperature;

  if (unitFrom === 'celsius') {
    convertedTemperature = (temperature * 9/5) + 32;
    convertedUnit.textContent = 'Fahrenheit';
  } else {
    convertedTemperature = (temperature - 32) * 5/9;
    convertedUnit.textContent = 'Celsius';
  }

  convertedValue.textContent = convertedTemperature.toFixed(2);
  conversionResult.style.display = 'block';
});
