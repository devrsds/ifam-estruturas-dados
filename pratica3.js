let n = parseInt(prompt('Quantos elementos? '))
const vetor = []
let pares = 0
for (let i = 0; i < n; i++) {
  vetor[i] = parseInt(prompt(`Elemento ${i + 1}: `)) 
  if (vetor[i] % 2 === 0) pares++
}
document.writeln('<b>Vetor:</b> ' + vetor + '<br>')
document.writeln('<b>Quantidade de numeros pares:</b> ' + pares)