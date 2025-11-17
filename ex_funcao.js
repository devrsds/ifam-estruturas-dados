
function tabuada (num){
    for(let i = 1; i <= 10; i++){
    console.log(`${num} X ${i} = ${num*i}`)
        
    }
}
let num = parseFloat(prompt("Digite um número: "))
    console.log(tabuada(num))
    /*function tabuada (num){
    let resultado ""
    for(let i = 1; i <= 10; i++){
        resultado += numero + "x" + i + "=" + (numero*i)
    }
        return resultado
    }
        let num = Number(prompt("Digite um número:"))
        console.log(tabuada(num))*/