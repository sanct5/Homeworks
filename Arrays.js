//Arreglo de frutas colombianas
var frutasColombianas = [
    "Aguacate", "Aguaymanto", "Arándano andino", "Borojó", "Cacao",
    "Carambolo", "Chirimoya", "Curuba", "Feijoa", "Granadilla",
    "Guanábana", "Guayaba", "Guayabilla", "Lulo", "Mamey",
    "Mamoncillo", "Mango", "Manzana de agua", "Mora", "Níspero",
    "Papaya", "Pitahaya", "Tomate de árbol", "Uva caimarona", "Uvita de playa",
    "Zapote",
]

//Función forEach, recorre todos los elementos del arreglo y realizando la función que se le asigne.
frutasColombianas.forEach(fruta => {
    console.log(fruta);
})

//Añadir un elemento al inicio, al final, y eliminar un elemento de estas mismas posiciones
/*--------- Final ------------*/
frutasColombianas.push("Nuevo elemento") //Agregar
frutasColombianas.pop() //Eliminar
/*--------- Inicio ------------*/
frutasColombianas.unshift("Nuevo elemento") //Agregar
frutasColombianas.shift() //Eliminar

//Encontrar la posición de un elemento recorriendo el array de principio a fin
frutasColombianas.indexOf("Borojó")

//Encontrar la posición de un elemento recorriendo el array desde el final hasta el principio
frutasColombianas.lastIndexOf("Borojó")

/*Con splice podemos eliminar elementos de un array o sacar una copia de él, hay que tener en cuenta
que esto afecta al array original. Recibe como parametros la posición inicial y el numero de elementos a eliminar del array*/
var mitadFrutas = frutasColombianas.splice(0,(frutasColombianas.length)/2)
console.log(mitadFrutas)
console.log(frutasColombianas)

/* Con la función concat se puede concatenar arrays sin afectar los arrays originales*/
//Unir de nuevo el array de frutasColombianas
var frutasColombianas = frutasColombianas.concat(mitadFrutas)
console.log(frutasColombianas)

//Ejemplo independiente al array de frutasColombianas
let numerosPares = [0,2,4,6,8]
let numerosImpares = [1,3,5,7,9]
let numerosDecimales = numerosImpares.concat(numerosPares)
console.log(numerosDecimales)

/*La función copyWithin copia elementos de un array en otra posición del mismo array.
Esto afecta el array original ademas de que reemplaza los elementos que hayan en las posiciones destino si es necesario*/
// Copiar los elementos desde el índice 10 y pegarlos a partir del índice 0, copiando 5 elementos
frutasColombianas.copyWithin(0, 10, 15)
console.log(frutasColombianas)

/*entries obtiene un iterador el cual está compuesto por la posición y el valor de los elementos
del array original*/
// Obtener un iterador usando entries()
var iterator = frutasColombianas.entries()

//Iterar a través de los pares clave-valor del array de frutasColombianas
for (const [indice, fruta] of iterator) {
    console.log(`Índice: ${indice}, Fruta: ${fruta}`)
}

//Every verifica si todos los elementos del array cumplen con una condición, devuelve true o false.
const todosSonStrings = frutasColombianas.every(x => typeof x === "string")
console.log(todosSonStrings)

//Some verifica si almenos uno de los elementos del array cumplen con una condición, devuelve true o false.
const algunoEsNumero = frutasColombianas.some(x => typeof x === "number");
console.log(algunoEsNumero);

/*Fill reemplaza el valor de los elementos desde una posición especificada hasta otra*/
//En este caso reemplaza las frutas desde la posición 10 hasta la 14
frutasColombianas.fill("Fruta Desconocida", 10,15);
console.log(frutasColombianas)

/*Filter recorre todo el arreglo y crea uno nuevo, sin afectar el original, extrayendo los
elementos que cumplan la condición especificada*/
const frutasLargas = frutasColombianas.filter(fruta => fruta.length > 6);
console.log(frutasLargas)

/*Find permite encontrar el primer o ultimo elemento de cumpla con una condicion dada.
Posee tambien la posibilidad de devolver el indice del elemento*/

//Encontrar la primera fruta que tenga la letra O
const frutaConO = frutasColombianas.find(fruta => fruta.includes("o")); //Elemento
console.log(frutaConO)

const indiceFrutaConO = frutasColombianas.findIndex(fruta => fruta.includes("o")); // Indice
console.log(indiceFrutaConO)

//Encontrar la ultima fruta que tenga la letra O
const ultimaFrutaConO = frutasColombianas.findLast(fruta => fruta.includes("o")); //Elemento
console.log(ultimaFrutaConO)

const indiceUltimaFrutaConO = frutasColombianas.findLastIndex(fruta => fruta.includes("o")); // Indice
console.log(indiceUltimaFrutaConO)

//Flat se usa para convertir un array anidado en un solo array
var numerosDecimalesAnidados = [0,[1,2],3,4,5,[6,7,8],9]
numerosDecimalesAnidados = numerosDecimalesAnidados.flat()
console.log(numerosDecimalesAnidados)

/*Map es similar a forEach, pues recorre el arreglo, con la diferenciade que no afecta
el array original y realiza modificaciones en los elementos de ser especificado.*/
let agregarColombiana = frutasColombianas.map(fruta => fruta + " Colombiana");
console.log(frutasColombianas,agregarColombiana)

/*Flatmap es una combinación de la función flat y map, sin embargo hay que tener cuidado
ya que primero mapea y luego realiza el flat*/
var numerosDecimalesAnidados = [0,[1,2],3,4,5,[6,7,8],9]
numerosDecimalesAnidados = numerosDecimalesAnidados.flatMap(numero => [numero, numero * 2])
console.log(numerosDecimalesAnidados)

//From crea un nuevo array a partir de un objeto iterable o una estructura similar a un array, como una cadena de texto, un conjunto o un mapa.
//Texto
const texto = "Guayaba"
const arrayDeCaracteres = Array.from(texto)
console.log(arrayDeCaracteres)

//Numeros y mapeos
const numeros = [1, 2, 3, 4, 5]
const arrayDuplicado = Array.from(numeros, numero => numero * 2)
console.log(arrayDuplicado)

//Includes permite determinar si un elemento con un nombre existe dentro del array. retorna true o false.
console.log(frutasColombianas.includes("Papaya"))

//Keys retornar un arreglo iterador con los indices del arreglo original
for (const indice of frutasColombianas.keys()) {
    console.log(indice)
}

//Join permite concatenar los nombres de los elementos del array definiendo un separador
console.log(frutasColombianas.join(" + "))

//Reduce invierte el orden de los elementos del array, puede afectar el array original.
console.log(frutasColombianas.reverse())

//Sort ordena los elementos del array, se puede complementar con una función flecha para poner condiciones de ordenamiento
//Sort comun
frutasColombianas.sort()
console.log(frutasColombianas)

//Sort con funcion flecha
frutasColombianas.sort((a, b) => b.localeCompare(a));
console.log(frutasColombianas);

//Values retornar un arreglo iterador con los valores del arreglo original
for (const valor of frutasColombianas.values()) {
    console.log(valor)
}