// Función que permite al usuario elegir el método de cálculo
function escogerMetodo() {
    let numero = parseInt(prompt("Ingrese el número que desea saber si es par o impar"));
    let metodo = parseInt(prompt("Escriba 0 para utilizar la función regular o 1 para la función flecha"));
    let tipo = "";

    if (metodo === 0) {
        tipo = funcionRegular(numero);
    } else {
        tipo = funcionFlecha(numero);
    }

    console.log(`El número ${numero} es ${tipo}`);
}

// Función regular para determinar si un número es par o impar
const funcionRegular = function(n) {
    let residuo = n % 2;
    let msg = "";

    if (residuo === 0) {
        msg = "par";
    } else {
        msg = "impar";
    }

    return msg;
}

/*DIFERENCIAS DE LA FUNCION FLECHA CON LA FUNCION REGULAR
- No tiene sus propios enlaces a this o super y no se debe usar como métodos.
- Las arrow functions no tienen su propio this sino que lo heredan del contexto superior.
- No tiene argumentos o palabras clave new.target.
- No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
- No se puede utilizar como constructor.
- No se puede utilizar yield dentro de su cuerpo.
- Si recibe varios parámetros se requieren paréntesis, en caso de que solo sea uno no.
- Las declaraciones de varias líneas requieren corchetes y return, si es una unica instruccion se pueden obviar.
- Son de tipo anonimas, es decir, carecen de nombre, pero pueden ser asignadas a una varibale*/

// Función flecha para determinar si un número es par o impar
const funcionFlecha = n => {
    let residuo = n % 2;
    let msg = "";

    if (residuo === 0) {
        msg = "par";
    } else {
        msg = "impar";
    }

    return msg;
}

// Llamamos a la función para iniciar el programa
escogerMetodo();