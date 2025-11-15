let rotaA = 0, rotaB = 0, contNulos =0, contBranco =0;
    do{
        var op = prompt("Qual ônibus te transporta?\n1 Rota A\n2 Rota B")
         switch(op){
            case '0': contBranco++;break;
            case '1': rotaA++;break;
            case '2': rotaB++;break;  
            default: contNulos-1;break;          
            
        }  
    }while(op!='-1');
    alert(`Eleição encerrada\nRota A = ${rotaA} \nRota B = ${rotaB}\n
        Branco = ${contBranco}\nNulo: ${contNulos}\nQuantidade de participantes: ${contBranco+contNulos+rotaA+rotaB}`)