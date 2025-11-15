function multiplicacao(n1, n2){
    return n1 * n2
}
function divisao(n1, n2){
    return n1 / n2
}
function subtracao(n1, n2){
    return n1 - n2
}
function adicao(n1, n2){
    return n1 + n2
}
let operacao = prompt("Operação:\n1. Multiplicação\n2. Divisão\n3. Subtração\n4. Adicão")
let n1 = prompt("Informe o primeiro numero:")
let n2 = prompt("Informe o segundo numero:")
switch(operacao){
case"1":
    document.writeln(multiplicacao(n1,n2))
    break;
case"2":
    document.writeln(divisao(n1,n2))
    break;
case"3":
    document.writeln(subtracao(n1,n2))
    break;
case"4":
    document.writeln(adicao(n1,n2))
    break;
default:
alert("opção Invalida.")
}
