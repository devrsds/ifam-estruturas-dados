let num = parseInt(prompt("Digite um número: ")) // num significa número!
    /*if(num %2 == 0)
alert("Esse número é Par.")
    else
alert("Esse número é Impar.")*/
//alert((num %2 == 0)? "PAR.": "IMPAR.")
alert(`${(num %2 === 0 ? "Par" : "Impar")}`) //essa linha não funciona!