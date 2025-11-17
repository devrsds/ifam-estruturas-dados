function celsiusParaFahrenheit(celsius){
    return (celsius*9/5) + 32
}
let tempCelsius = parseFloat(prompt("Digite a temperatura em °C:"))
alert("Em Fahrenheit: °F " + celsiusParaFahrenheit(tempCelsius))