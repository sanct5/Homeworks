const dailyTasks = [
    {
        title: "Hacer la Cama",
        description: "Estirar las sábanas, acomodar las almohadas y dejar la cama ordenada."
    },
    {
        title: "Preparar un Batido",
        description: "Mezclar frutas, yogur y leche para hacer un batido energizante."
    },
    {
        title: "Lavar los Platos",
        description: "Lavar y secar los platos después de cada comida para mantener la cocina limpia."
    },
    {
        title: "Caminar 30 Minutos",
        description: "Salir a caminar durante 30 minutos para mantenerme activo."
    },
    {
        title: "Crear una Lista de Tareas",
        description: "Escribir las tareas que debo completar hoy para tener una guía clara."
    },
    {
        title: "Responder Correos Electrónicos",
        description: "Revisar mi bandeja de entrada y responder a los correos importantes."
    },
    {
        title: "Leer durante el Almuerzo",
        description: "Dedicar tiempo a leer un libro mientras almuerzo para relajarme."
    },
    {
        title: "Limpiar el Baño",
        description: "Lavar el lavabo, el inodoro y el espejo del baño para mantenerlo higiénico."
    },
    {
        title: "Meditar 10 Minutos",
        description: "Practicar la meditación durante 10 minutos para calmar la mente."
    },
    {
        title: "Llamar a un Amigo",
        description: "Hacer una llamada rápida a un amigo para mantenernos en contacto."
    },
    {
        title: "Aprender una Nueva Receta",
        description: "Investigar y probar una receta de cocina que nunca haya hecho antes."
    },
    {
        title: "Jugar con la Mascota",
        description: "Dedicar tiempo a jugar y cuidar a mi mascota para mantenerla feliz."
    },
    {
        title: "Dibujar en mi Cuaderno",
        description: "Tomar unos minutos para dibujar y expresar mi creatividad en mi cuaderno."
    },
    {
        title: "Organizar el Armario",
        description: "Ordenar y doblar la ropa en mi armario para mantenerlo ordenado."
    },
    {
        title: "Apagar Dispositivos antes de Dormir",
        description: "Desconectar los dispositivos electrónicos antes de acostarme para mejorar mi sueño."
    }
];

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Insertar un nodo en una posición dada
    append(value, position) {
        const newNode = new Node(value);

        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            if (!this.tail) {
                this.tail = newNode;
            }
            return `El elemento ${value.title} se insertó como cabeza`;
        }

        let current = this.head;
        let currentIndex = 0;
        while (current !== null && currentIndex < position - 1) {
            current = current.next;
            currentIndex++;
        }

        if (current === null) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            newNode.next = current.next;
            current.next = newNode;
        }

        return `${value.title} insertado en la posición: ${position}`;
    }

    // Buscar un valor en la lista
    peek(value, current = this.head) {
        if (this.head === null) {
            return false;
        }

        if (current !== null) {
            if (current.value.title === value.title) {
                return true;
            } else {
                return this.peek(value, current.next);
            }
        }

        return false;
    }

    // Obtener el tamaño de la lista
    size(current = this.head, acum = 0) {
        if (current === null) {
            return acum;
        }
        
        return this.size(current.next, acum + 1);
    }    

    // Eliminar un valor de la lista
    remove(value, current = this.head) {
        if (this.head === null) {
            return false;
        }

        if (this.head.value.title === value.title) {
            this.head = this.head.next;
            return true;
        }

        if (current.next !== null) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return true;
            } else {
                return this.remove(value, current.next);
            }
        }
        
        return false;
    }

    // Imprimir la lista
    print() {
        let node = this.head;
        while (node !== null) {
            console.log(`Título: ${node.value.title} --> Descripción: ${node.value.description} | Next: ${node.next ? node.next.value.title : null}`);
            node = node.next;
        }
    }
}

// creación de la LinkedList
var listTasks = new LinkedList();

// agregar datos del arreglo dailyTask en la lista
for (const task of dailyTasks) {
    console.log(listTasks.append(task, dailyTasks.indexOf(task)));
}

// imprimir el tamaño de la lista
console.log(`Tamaño de la lista: ${listTasks.size()}`);

// imprimir la lista
console.log("______TODOs list______");
listTasks.print();

// eliminar un nodo dado (Cambiar la posición en al array del 0 al 14 para probar valores)
listTasks.remove(dailyTasks[5]);

// agregar un nodo dado en la posición deseada (Cambiar la posición en al array del 0 al 14 para probar valores)
listTasks.append(dailyTasks[5],5);

// buscar un nodo dado (Cambiar la posición en al array del 0 al 14 para probar valores)
listTasks.peek(dailyTasks[5]);