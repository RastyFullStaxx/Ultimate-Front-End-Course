document.getElementById("submitTemp").onclick = function(){
    
    let temp;
    temp = parseFloat(document.getElementById("tempInput").value);
    let selectedRadio = document.querySelector('input[name="tempType"]:checked');
    let unselectedRadio = document.querySelector('input[name="tempType"]:not(:checked)');
    
if(selectedRadio){
        let selectedFormula = selectedRadio.value;
        let convertedTemp;

        if (selectedFormula === "celsius"){
            convertedTemp = toCelsius(temp);
        } else if (selectedFormula == "fahrenheit"){
            convertedTemp = toFahrenheit(temp);
        }

        document.getElementById("displayResults").innerHTML = `Temperature from ${unselectedRadio.value} to ${selectedRadio.value}: 
        ${convertedTemp} degrees ${selectedRadio.value}`;
    }     
}

// Function for Celsius Conversion Formula
function toCelsius(temp){
    return 5/9 * (temp - 32);
}

// Function for Fahrenheit Conversion Formula
function toFahrenheit(temp){
    return (9/5 * temp) + 32;
}

