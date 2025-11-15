let n = parseInt(prompt('Quantos números inteiros? '))
const numeros = [];

for (let i = 0; i < n; i++) {
  numeros[i] = parseInt(prompt(`Número ${i + 1}: `));
}
document.writeln('Vetor: ' + numeros);