//Topico 1:
    let num = -5;
    let sinal = Math.sign(num);

    if(sinal == -1){
        console.log(`O numero ${num} é negativo`);
    }else if(sinal == 0){
        console.log((`O numero ${num} é nulo`));
    }else {
        console.log((`O numero ${num} é positivo`));
    }