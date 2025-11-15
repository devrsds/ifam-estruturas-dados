var dormiu = parseInt(prompt("Hora de Dormir: "))
var acordou = parseInt(prompt("Hora de acordar: "))
var sono = 0
if(dormiu>12 && acordou<12){
    sono = 24 -(dormiu-acordou)
    alert(`${sono} horas de sono.`)
}else{
    alert(`${sono} horas de sono.`)
} 
let i=1
while(i <= sono){
    alert(`${i} horas(s)dormindo`)
    i++
}
// SE O USUARIO DORMIR DAS 23 AS 24
/*let dormiu = parseInt(prompt("Hora de Dormir: "))
let acordou = parseInt(prompt("Hora de acordar: "))
let sono = acordou - dormiu
if(dormiu>12 || acordou<12){
    sono = (24 -dormiu)+acordou
    alert(`${sono} horas de sono.`)
}else{
    alert(`${sono} horas de sono.`)
}*/
