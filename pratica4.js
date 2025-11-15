const a = []
const b = []
const c = []
for (let i = 0; i <4; i++) {
  a[i] = parseInt(prompt("Numero A:")) 
}
for (let i = 0; i < 4; i++) {
  b[i] = parseInt(prompt("Numero B:")) 
}alert("Produto Vetores:")
for (let i = 0; i < 4; i++) {
  c[i] = a[i] * b[i]
document.writeln(c[i])}