let quantidade = parseFloat(prompt("Quantos numeros: "), 0) 
const numeros = []
for (let i = 0; i < quantidade; i++) {
    const entrada = prompt(`Número ${i + 1}: `) || '0'
    numeros[i] = parseFloat(entrada.replace()) || 0
}

let soma = 0
for (let i = 0; i < quantidade; i++) {
    soma += numeros[i];
}
if (soma > 100) {
    document.writeln(`<b>Soma dos números:</b> ${soma}.`)
}
