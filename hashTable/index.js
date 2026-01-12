// what is hash table?
// hash table is a data structure that stores data in an associative manner. 
// In simple terms, a hash table implements an associative array 
// abstract data type, a structure that can map keys to values.
//  A hash table uses a hash function to compute an index into 
// an array of buckets or slots, from which the desired value can be found.

//hash function is a function that takes a key and returns an index into the array.


class HashTable {
    constructor(size=5) {
        this.keyMap = new Array(size);
    }

    _hashFunction(key){
        let sum = 0;
        const PRIME_NUMBER = 31;
        key = key.toLowerCase();
        for(let i= 0; i<Math.min(key.length, 100); i++){
          const charCode = key.charCodeAt(i) -96;
          sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
        }
        return sum;
    }

    set(key, value){
        const index = this._hashFunction(key);
       
        if(!this.keyMap[index]) this.keyMap[index] = [];
        this.keyMap[index].push([key, value]);
        return this;
    }

    get(key){
        const index = this._hashFunction(key);
        if(this.keyMap[index]){
            for(let i=0; i<this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] ===key){
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    getAllKeys(){
        const keys=[]

        for(let i=0; i<this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j<this.keyMap[i].length; j++){
                    keys.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keys;
    }

    getAllValues(){
        const values =[];

        for(let i=0; i<this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j<this.keyMap[i].length; j++){
                    values.push(this.keyMap[i][j][1]);
                }
            }
        }
        return values;
    }
}

const phoneBook = new HashTable();
phoneBook.set("John", "555-333-445");
phoneBook.set("Jane", "550-222-440");
phoneBook.set("Jill", "435-111-444");
console.log(phoneBook.getAllKeys());
console.log(phoneBook.getAllValues());
// console.log(phoneBook.get("John"));


