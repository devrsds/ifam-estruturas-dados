const expr = prompt("Informe uma fruta:\n1. Laranjas\n2. Mangas \n3. Mamões \n4. Caja \n5. Melancia");
switch (expr) {
case "1":
    alert("Laranjas custam R$0.59 por quilos.");
    break;
case "2":
    alert("Mangas custam R$4.80 por quilos.");
    break;
case "3":
    alert("Mamões custam R$2.79 por quilos.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
case "4":
    alert("Caja custa R$7.20 por quilos.");
    break;
case "5":
    alert("Melancia custa R$6.30 por quilos.");
    break;
    default:
    alert(`Desculpe, estamos sem ${expr}.`);
}