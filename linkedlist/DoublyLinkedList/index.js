//what is doubly linked list?
//doubly linked list is a type of linked list 
// where each node has a reference to both the next and the previous node.

//previous properties is called prev

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(value){
        //new node
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        this.length++;
        return this;
    }

    //pop method
    pop(){
        if(this.length === 0){
            return undefined;
        }

        let temp = this.tail;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }

        this.tail = this.tail.prev;
        this.tail.next = null;
        temp.prev = null;

        this.length--;
        return temp;
    }

    //unshift method
    unshift(value){
        const newNode = new Node(value);
        
        if(!this.length ===0){
            this.head = newNode;
            this.tail = newNode;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;

        this.length++;
        return this;
    }

    //shift method - remove the first node
    shift(){
        if(this.length === 0){
            return undefined;
        }

        let temp = this.head;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }

        this.head = this.head.next;
        this.head.prev = null;
        temp.next = null;

        this.length--;
        return temp;
    }
    
}

const myDoublyLinkedList = new DoublyLinkedList(0);
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.unshift(4);
console.log(myDoublyLinkedList);
