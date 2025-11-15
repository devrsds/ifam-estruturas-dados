
function fac(num) {
  return num < 2 ? 1 : num * fac(num - 1)
}

let num = parseInt(prompt("Informe um número:"))
document.writeln(`${num}! = ${fac(num)}`)
