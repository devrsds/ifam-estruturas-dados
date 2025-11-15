let quantidade = parseInt(prompt("Quantos números: ")) || 0 ;
const numeros = [];
let somaimpares = 0;
for (let i = 0; i < quantidade; i++) {
  const entrada = prompt(`Número ${i + 1}:`) || '0';
  numeros[i] = parseFloat(entrada())
  // posições ímpares (1,3,5,...) correspondem aos índices 0,2,4...
  if (i % 2 === 0) somaimpares += numeros[i]
}
document.writeln(`Soma dos elementos nas posições ímpares: ${somaimpares}`)