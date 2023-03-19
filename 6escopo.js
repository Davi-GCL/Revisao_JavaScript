//Topico 1: 
    // function fun1(param){

    //     function fun2(){
    //         console.log(param);
    //     }

    //     return fun2();
    // }

    // fun1("arara");

//Topico 2:
    // function fun1(x){
    //     let y = 10;

    //     function fun2(param){
    //         return y + param;
    //     }

    //     return fun2(x);
    // }

    // console.log(fun1(5));

//Topico 3:
    function criaObj(param){
        
        function exibeTexto(valor){
            console.log(`a mensagem é ${valor}`);
        }

        let variavel = param;

        return {
            exibeTexto: exibeTexto(variavel) ,
            lerVar: () => { return variavel;},
            modVar: (novaVar) => { variavel = novaVar}
        }
    }

    let aux = criaObj("hello world");
    aux.exibeTexto;
    aux.modVar("Olá mundo!");
    console.log(aux.lerVar());
