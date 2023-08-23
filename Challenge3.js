const books = [
    {
        name: "El Enigma de las Estrellas",
        ISBN: "978-1234567890",
        author: "María Rodríguez",
        editorial: "Editorial Nova"
    },
    {
        name: "Caminos Interiores",
        ISBN: "978-9876543210",
        author: "Carlos Sánchez",
        editorial: "Libros Profundos"
    },
    {
        name: "Aventuras en la Neblina",
        ISBN: "978-5432109876",
        author: "Ana Martínez",
        editorial: "Ediciones Bruma"
    },
    {
        name: "La Senda del Destino",
        ISBN: "978-0123456789",
        author: "Luis Gómez",
        editorial: "Camino Editorial"
    },
    {
        name: "Misterios en la Ciudad",
        ISBN: "978-8765432101",
        author: "Laura Pérez",
        editorial: "Libros Urbanos"
    },
    {
        name: "El Legado Perdido",
        ISBN: "978-2345678901",
        author: "Juan González",
        editorial: "Editorial Antigua"
    },
    {
        name: "Reinos Olvidados",
        ISBN: "978-7654321098",
        author: "Isabel Ramírez",
        editorial: "Ediciones Épicas"
    },
    {
        name: "Secretos del Abismo",
        ISBN: "978-8901234567",
        author: "Roberto Fernández",
        editorial: "Marina Editorial"
    },
    {
        name: "La Última Aventura",
        ISBN: "978-6789012345",
        author: "Elena Vargas",
        editorial: "Libros Finales"
    },
    {
        name: "El Oráculo Milenario",
        ISBN: "978-3210987654",
        author: "Miguel López",
        editorial: "Sabiduría Impresa"
    }
];

class Stack{
    constructor(){
        this.stack = [];
    }

    push(value){
        this.stack.push(value);
        return this.stack;
    }

    pop(){
        return this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length - 1];
    }

    size(){
        return this.stack.length;
    }
    print(){
        console.log(this.stack);
    }
}

var bookStack = new Stack()

for (let i = 0; i < books.length - 1; i++) {
    bookStack.push(books[i]);
}

bookStack.print()
bookStack.pop()
bookStack.size()