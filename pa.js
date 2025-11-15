let a1 = parseInt(prompt("Digite o primeiro numero:"))
let n = parseInt(prompt("Digite o segundo numero:"))
let r = parseInt(prompt("Digite o terceiro numero:"))
let an=a1 + (n-1)*r
while(a1 <=an){
    document.writeln(a1 + ",")
    a1 += r
    n++
}