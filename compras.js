// Esse algoritmo mostra a quantidade de itens e o valor de cada sem precisar declarar varias variaveis.
let itens = parseInt(prompt("Informe quantos itens tem na lista:"))
total = 0
for (let i = 1; i<=itens; i++){
    let valor = parseFloat(prompt(`Qual o valor do item${i}:`))
    res = total += valor
    }
    document.writeln(`<b>MERCADINHO GILMAR</b><br>`)
    document.writeln(`Você comprou <b>${itens} itens.</b><br> O valor total desses itens são: <b>R$ ${res.toFixed(2)}</b>`)
