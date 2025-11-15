let quantidade = parseInt(prompt("Quantos numeros: "))
var pares = 0, impares = 0
const numeros = []

for (let i = 0; i < quantidade; i++) {
    numeros[i] = parseInt(prompt())
    if (numeros[i] % 2 == 0) 
        pares++
    else 
        impares++
    }
    document.writeln(`<b>Numeros informados:</b><br>`)
    for (let i = 0; i < quantidade; i++) {
        document.writeln(numeros[i] + "<br>")
    }
    document.writeln(`<br><b>Total de numeros pares:</b> ${pares}<br>Quantidade de numeros impares: ${impares}`)
