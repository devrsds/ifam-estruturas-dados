function calcularmedia(nt1,nt2,nt3){
    return (nt1 + nt2 +nt3)/3
}
let nt1 = parseFloat(prompt("Informe o primeira nota:"))
let nt2 = parseFloat(prompt("Informe o segunda nota:"))
let nt3 = parseFloat(prompt("Informe o terceira nota:"))
let media = calcularmedia(nt1,nt2,nt3)
alert("A media é: " + calcularmedia (nt1,nt2,nt3))
function verificador(){
    if(media<7){
        return"Reprovado média" + media.toFixed(2)
    }else{
        return"Aprovado média"+ media.toFixed(2)
    }
}
alert("A verificação é: "+ verificador())