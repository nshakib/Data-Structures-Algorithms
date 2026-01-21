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
}

const tree = new BST();
tree.insert(5);
tree.insert(3);
tree.insert(8);
console.log(tree);
