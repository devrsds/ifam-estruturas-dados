let n = parseInt(prompt('Quantas pessoas? '))
const idades = []
let soma = 0
for (let i = 0; i < n; i++) {
  idades[i] = parseInt(prompt(`Idade da pessoa ${i + 1}: `))
  soma += idades[i]
}
media = soma / n 
document.writeln(`Idades: ${idades}<br>`)
document.writeln(`Média das idades: ${media.toFixed(2)}`)