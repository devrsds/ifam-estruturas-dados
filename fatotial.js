// A logica matemática desse algoritmo é o número informado multiplicando o numero informado diminuindo até chegar no 1.
let num = parseInt(prompt("Informe um número:"))
var fatorial = 1
for (let i=1; i<=num; i++){
    fatorial= fatorial*i
}
    document.writeln(`${num}! = ${fatorial} `)