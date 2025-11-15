var vetor = new Array();
vetor[0] = "Olá";
vetor[98] = "Estudo"
vetor[99] = "IFAM";
//if (vetor.length == 100) alert("O length é 100.");
//alert(vetor[vetor.length-1])
vetor.shift()
vetor.forEach(function (item, indice, Array) {
alert(item, indice);
});
