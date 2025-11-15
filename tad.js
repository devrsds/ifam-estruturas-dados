var vetor = new Array();
vetor[0] = "Olá";
vetor[98] = "Estudo"
vetor[99] = "IFAM";
vetor.unshift("Olá") // Já no vetor unshift vai adicionar 
vetor.shift() // no vetor shift ele vai remover o vetor[0] chamado olá
vetor.forEach(function (item, indice, Array) {
alert(item,indice);
});