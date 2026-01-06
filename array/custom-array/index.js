class MyArray {
    // constructor
    constructor(){
        this.length = 0;
        this.data = {};
    }

    // push method
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    //get method
    get(index){
        return this.data[index];
    }

    //pop method remove last item
    pop(){
        const lastItem = this.data[this.length -1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    // shift remove first item  
    shift(){
        const firstItem = this.data[0];
        for(let i=0; i<this.length; i++){
            this.data[i] = this.data[i+1];
        }
        
        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }

    //delete method  remove from the specific index
    delete(index){
        const item = this.data[index]
        for(let i= index; i<this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
        return item;
    }
}

const myNewArray = new MyArray();
myNewArray.push("Hi");
myNewArray.push("Bye");
myNewArray.push("Hello");
console.log(myNewArray);
// console.log(myNewArray.get(1));
// console.log(myNewArray.pop());
// console.log(myNewArray.shift());
console.log(myNewArray.delete(1));
console.log(myNewArray);



