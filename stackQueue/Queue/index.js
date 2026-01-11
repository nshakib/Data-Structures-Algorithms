//what is queue
//queue is FIFO (First In First Out)
//queue is like a line of people waiting for a bus
//first person to get on the bus is the first person to get off the bus
//last person to get on the bus is the last person to get off the bus

//enqueue method
//dequeue method
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
   constructor(value){
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
   }

   enqueue(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        }

        this.last.next = newNode;
        this.last = newNode;
        this.length++;
        return this;
    }

    dequeue(){
        if(this.length === 0){
            return undefined;
        }
        let temp = this.first;
        if(this.length === 1){
            this.first = null;
            this.last = null;
        }

        this.first = this.first.next;
        temp.next = null;
        this.length--;
        return temp;
    }
}

let myQueue = new Queue(0);
myQueue.enqueue(1);
myQueue.enqueue(2);
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);

