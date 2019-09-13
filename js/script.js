'use strict'
//Change to fahrenheit:
var outputC;
var buttonC;
var factorTempA;
var factorTempB;
var outputF;
var buttonF;

outputC = document.getElementById('celsius-output');

outputC.innerHTML += 'Click the button to check weather!' + '<br><br>';

buttonC = document.getElementById('celsius-button');

factorTempA = 1.8;

factorTempB = 32;

buttonC.addEventListener('click', function () {
    var nameC;
    var numberC;
    var temp;

    nameC = window.prompt('What is the temperature in celsius?');

    if (isNaN(nameC)) {
        alert('It must be a number')
        return;
    }

    function numberC(x) {
        return factorTempA * (x - factorTempB);
    }

    temp = numberC(nameC);

    if (temp > 10 && temp < 50) {
        outputC.innerHTML += ('water is in liquid condition, and you should wear scarf<br>');
    }

    if (temp > -100 && temp < 9) {
        outputC.innerHTML += ('water is in frozen condition, and you should wear light jacket<br>');
    }

    if (temp > 50 && temp < 200) {
        outputC.innerHTML += ('water is in state condition, and you should wear shorts<br>');
    }

    if (temp <= -273.15) {
        outputC.innerHTML += ('it is gonna be iceage<br>');
    }

    outputC.innerHTML += 'fahrenheit ' + temp + '!' + '<br><br>';
});
//Change to Celsius
outputF = document.getElementById('fahrenheit-output');

outputF.innerHTML += 'Click the button to check weather!' + '<br><br>';

buttonF = document.getElementById('fahrenheit-button');

buttonF.addEventListener('click', function () {
    var nameF;
    var numberF;
    var temp;

    nameF = window.prompt('What is the temperature in fahrenheit?');

    if (isNaN(nameF)) {
        alert('It must be a number')
        return;
    }

    function numberF(x) {
        return (x - factorTempB) / factorTempA;
    }

    temp = numberF(nameF);

    if (temp > 10 && temp < 50) {
        outputF.innerHTML += ('water is in liquid condition, and you should wear scarf<br>');
    }

    if (temp > -100 && temp < 1) {
        outputF.innerHTML += ('water is in frozen condition, and you should light jacket<br>');
    }

    if (temp > 50 && temp < 200) {
        outputF.innerHTML += ('water is in state condition, and you should wear shorts<br>');
    }

    if (temp <= -273.15) {
        outputF.innerHTML += ('it is gonna be iceage<br>');
    }

    outputF.innerHTML += 'celsius ' + temp + '!' + '<br><br>';
});