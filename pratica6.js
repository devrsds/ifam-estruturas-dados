let quantidade = parseInt(prompt("Quantos itens? "))
const itens = []
const precos = []
let total = 0
for (let i = 0; i < quantidade; i++) {
  itens[i] = prompt(`Nome do item ${i + 1}:`) || `Item ${i + 1}`
  const entrada = prompt(`Preço do item ${i + 1}:`) 
  precos[i] = parseFloat(entrada) 
  total += precos[i]
}
document.writeln('Itens:<br>')
for (let i = 0; i < quantidade; i++) {
  document.writeln(`${itens[i]} - R$ ${precos[i].toFixed(2)}<br>`)
}
document.writeln(`<br><b>Valor total:</b> R$ ${total.toFixed(2)}`)