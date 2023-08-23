const atmQueue = [
    {
        name: "Juan",
        arriveTime: "09:30 AM"
    },
    {
        name: "María",
        arriveTime: "10:15 AM"
    },
    {
        name: "Carlos",
        arriveTime: "11:00 AM"
    },
    {
        name: "Ana",
        arriveTime: "02:45 PM"
    },
    {
        name: "Luis",
        arriveTime: "04:20 PM"
    },
    {
        name: "Laura",
        arriveTime: "01:10 PM"
    },
    {
        name: "Pedro",
        arriveTime: "03:30 PM"
    },
    {
        name: "Sofía",
        arriveTime: "08:50 AM"
    },
    {
        name: "Miguel",
        arriveTime: "12:25 PM"
    },
    {
        name: "Elena",
        arriveTime: "05:40 PM"
    }
];

class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(value){
        this.queue.push(value);
        return this.queue;
    }

    dequeue(){
        return this.queue.shift();
    }

    peek(){
        return this.queue[0];
    }

    size(){
        return this.queue.length;
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    print(){
        return console.log(this.queue);
    }
}

var personQueue = new Queue()

for (let i = 0; i < atmQueue.length - 1; i++) {
    personQueue.enqueue(atmQueue[i]);
}

personQueue.print()
personQueue.dequeue()
personQueue.size()