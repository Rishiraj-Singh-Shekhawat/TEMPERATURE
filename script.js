document.getElementById('convertButton').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitInput').value;
    const result = document.getElementById('result');

    if (isNaN(temperature)) {
        result.textContent = 'Please enter a valid number!';
        return;
    }

    let convertedTemp;
    let convertedUnit;

    switch (unit) {
        case 'Celsius':
            convertedTemp = {
                Fahrenheit: (temperature * 9/5) + 32,
                Kelvin: temperature + 273.15
            };
            result.innerHTML = `${convertedTemp.Fahrenheit.toFixed(2)} °F<br>${convertedTemp.Kelvin.toFixed(2)} K`;
            break;
        case 'Fahrenheit':
            convertedTemp = {
                Celsius: (temperature - 32) * 5/9,
                Kelvin: ((temperature - 32) * 5/9) + 273.15
            };
            result.innerHTML = `${convertedTemp.Celsius.toFixed(2)} °C<br>${convertedTemp.Kelvin.toFixed(2)} K`;
            break;
        case 'Kelvin':
            convertedTemp = {
                Celsius: temperature - 273.15,
                Fahrenheit: ((temperature - 273.15) * 9/5) + 32
            };
            result.innerHTML = `${convertedTemp.Celsius.toFixed(2)} °C<br>${convertedTemp.Fahrenheit.toFixed(2)} °F`;
            break;
        default:
            result.textContent = 'Invalid unit';
    }
});
