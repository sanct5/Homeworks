const funcionRegular = function (){
    let numero = 2;
    resultado = numero % 2
    if(resultado == 0){
        console.log(`El numero ${numero} es par`)
    }else{
        console.log(`El numero ${numero} es impar`)
    }
}

/*DIFERENCIAS DE LA FUNCION FLECHA CON LA FUNCION REGULAR
No tiene sus propios enlaces a this o super y no se debe usar como métodos.
No tiene argumentos o palabras clave new.target.
No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
No se puede utilizar como constructor.
No se puede utilizar yield dentro de su cuerpo.
Varios parámetros requieren paréntesis. Las declaraciones de varias líneas requieren corchetes y return:*/

const funcionFlecha = () => {
    let numero = 2;
    resultado = numero % 2
    if(resultado == 0){
        console.log(`El numero ${numero} es par`)
    }else{
        console.log(`El numero ${numero} es impar`)
    }
}