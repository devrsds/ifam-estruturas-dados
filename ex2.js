let n = parseFloat(prompt('Digite um número:'))
const tabuada = []
for (let i = 0; i <= 10; i++) {
    tabuada.push(n * i)
}
document.writeln(tabuada.join(','))