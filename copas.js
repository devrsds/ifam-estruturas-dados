const copas = [1958,1962,1970,1994]
let quantidade
do{
quantidade = prompt("Insira um numero:\n1.Inserir no inicio\n2.Remover do inicio\n3.Inserir no final\n4.Remover no final\n5. Informar o tamanho")
switch(quantidade){
    case"1":
copas.unshift()
    document.writeln("<b><br>Após unshift:</br></b>",copas)
break;
    case "2":
copas.shift()
document.writeln("<b><br>Após shift:</br></b>",copas)
    break;
    case "3":
copas.push()
document.writeln("<b><br>Após push:</br></b>",copas)
    break;
    case"4":
copas.pop()
document.writeln("<b><br>Após remover o final:</br></b>",copas)
    break;
    case"5":
copas.length()
    break;
    default:
    alert("<br>Opção Invalida.</br>")
}
document.writeln("<b><br>Após Tamanho:</br></b>",copas)
}while(quantidade!==0)
