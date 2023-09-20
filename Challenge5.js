class Person {
    constructor(fullname, birthdate) {
        this.fullname = fullname;
        this.birthdate = birthdate;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    isLeaf() {
        return this.children.length === 0;
    }
}

class NaryTree {
    constructor() {
        this.root = null;
    }

    search(fullname, node = this.root) {
        if (!this.root) {
            return null;
        }

        if (node.value.fullname === fullname) {
            return node;
        } else {
            const children = node.children;
            const inChildren = children.find(item => item.value.fullname === fullname);

            if (inChildren) {
                return inChildren;
            } else {
                let hasChild;
                children.forEach(item => {
                    if (hasChild) {
                        return;
                    }
                    hasChild = this.search(fullname, item);
                });

                return hasChild;
            }
        }
    }

    insert(value, parent) {
        const newNode = new Node(value);

        if (!parent) {
            if (!this.root) {
                this.root = newNode;
            } else {
                return null;
            }
        } else {
            const parentNode = this.search(parent);
            if (parentNode) {
                parentNode.children.push(newNode);
            } else {
                return null; // Parent not found
            }
        }
    }

    preOrder(node = this.root) {
        if (!node) {
            return;
        }

        console.log(node.value);
        node.children.forEach(element => {
            this.preOrder(element);
        });
    }

    postOrder(node = this.root) {
        if (!node) {
            return;
        }

        node.children.forEach(element => {
            this.postOrder(element);
        });

        console.log(node.value);
    }

    inOrder(node = this.root) {
        if (!node) {
            return;
        }

        if (node.children.length === 0) {
            console.log(node.value);
        } else {
            this.inOrder(node.children[0]);
            console.log(node.value);

            for (let i = 1; i < node.children.length; i++) {
                this.inOrder(node.children[i]);
            }
        }
    }
}

// Ejemplo de uso
const tree = new NaryTree();

tree.insert(new Person("Francy Johana Tamayo Zamora", "1983-03-08"), null);
tree.insert(new Person("Carlos Hernan Tamayo", "1963-05-10"), "Francy Johana Tamayo Zamora");
tree.insert(new Person("Mercedez Zamora", "1967-02-14"), "Francy Johana Tamayo Zamora");
tree.insert(new Person("Libia de Zamora", "1944-12-20"), "Mercedez Zamora");
tree.insert(new Person("Hernan Zamora ", "1950-02-31"), "Mercedez Zamora");
tree.insert(new Person("Rosa de Tamayo", "1923-07-01"), "Carlos Hernan Tamayo");
tree.insert(new Person("Humberto Tamayo ", "1920-08-12"), "Carlos Hernan Tamayo");


console.log("Preorder traversal:");
tree.preOrder();

console.log("Inorder traversal:");
tree.inOrder();

console.log("Postorder traversal:");
tree.postOrder();