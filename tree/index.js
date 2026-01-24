//what sis tree?
//tree is a non-linear data structure
/*
*
🌳 What is a BST (Binary Search Tree)?

! A Binary Search Tree (BST) is a tree-based data structure where:

? Each node has at most two children
 It follows a strict rule (called the BST property):
    * Left subtree  → values smaller than the node
    * Right subtree → values greater than the node

 🧠 Why do we need a BST? (Problems it solves)

    ? BST solves problems related to efficient searching, sorting, and dynamic data management.

*/

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;

    }

    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while(true){
            if(newNode.value === temp.value){
                return undefined;
            }
            if(newNode.value < temp.value){
                if(temp.left === null){
                    temp.left = newNode;
                    return this;
                }else{
                    temp = temp.left;
                }

            }else{
                if(temp.right === null){
                    temp.right = newNode;
                    return this;
                }else{
                    temp = temp.right;
                }
            }
        }
    }

    //BFS
    bfs(){
       let current = this.root;
       let queue = [];
       let data = [];

       queue.push(current);

       while(queue.length ){
        current = queue.shift();
        data.push(current.value);

        if(current.left){
            queue.push(current.left);
        }
        if(current.right){
            queue.push(current.right);
        }
       }
       return data;

    }

    //DFS
    dfsPreOrder(node = this.root, data= []){
        if(node === null) return data;
        console.log("........", data);
        data.push(node.value);

        if(node.left) this.dfsPreOrder(node.left, data);
        if(node.right) this.dfsPreOrder(node.right, data);

        return data;
    }

    dfsPostOrder(node = this.root, data= []){
        if(node === null) return data;
        // console.log("........", data);

        if(node.left) this.dfsPostOrder(node.left, data);
        if(node.right) this.dfsPostOrder(node.right, data);
        data.push(node.value);

        return data;
    }

    //dfsInOrder
    dfsInOrder(node = this.root, data= []){
        if(node === null) return data;
        // console.log("........", data);

        if(node.left) this.dfsInOrder(node.left, data);
        data.push(node.value);
        if(node.right) this.dfsInOrder(node.right, data);

        return data;
    }

    //include method
    includes(value){
        if(!this.root){
            return false;
        }
        let temp = this.root;
        while(temp){
            if(value < temp.value){
                temp = temp.left;
            }else if(value > temp.value){
                temp = temp.right;
            }else if(value === temp.value){
                return true;
            }
        }
        return false;
    }
}

const tree = new BST();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);
// console.log(tree.includes(1))
// console.log(tree.includes(5))
// console.log(tree.bfs());
// console.log(tree.dfsPreOrder());
// console.log(tree.dfsPostOrder());
console.log(tree.dfsInOrder());
