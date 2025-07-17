const textBox = document.getElementById('textBox');
const toCelsius = document.getElementById('toCelsius');
const toFahrenheit = document.getElementById('toFahrenheit');
const result = document.getElementById('result');
let temp;
function convertTemperature() {
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = (temp * 9/5) + 32;
        result.textContent = temp + ' °F';
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * 5/9;
        result.textContent = temp + ' °C';
    }
    else{
        result.textContent = "Please select a conversion option.";
    }
}