let expr = prompt("Informe a sua compra\n1. Mamao\n2.Laranja\n3.Abacaxi")
switch(expr){
    case "1":
    alert("Mamão custam R$ 6 por quilo.")
    break;
    case "2":
    alert("Laranja custam R$ 7 por quilo.")
    break;
    case "3":
    alert("Abacaxi custam R$ 12 por quilo.")
    break;
    default:
        alert(`Não possuimos a opção ${expr}`)
}