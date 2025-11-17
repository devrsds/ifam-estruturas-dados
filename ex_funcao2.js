function calcular(desconto){
return produto*(100-desconto)
}
let produto = parseFloat(prompt("Valor do produto:"))
let desconto = parseFloat(prompt("Valor do produto:"))
alert(`O valor é: ${(produto-desconto).toFixed(2)}`)
