let quantidade = parseInt(prompt("Quantas disciplinas? ")) 
const notas = [];
let soma = 0;

for (let i = 0; i < quantidade; i++) {
  const entrada = prompt(`Nota da disciplina ${i + 1}: `)
  const nota = parseFloat(entrada.replace()) || 0;
  notas[i] = nota;
  soma += nota;
}

const media = quantidade > 0 ? soma / quantidade : 0
document.writeln(`Notas: ${notas.join(', ')}<br>`);
document.writeln(`Média: ${media.toFixed(2)}<br>`);
document.writeln(media >= 6 ? 'Resultado: Aprovado' : 'Resultado: Reprovado');