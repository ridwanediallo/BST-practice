class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(num) {
    //your code here
    const newNode = new Node(num);
    if(this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if(newNode.data < root.data) {
      if(root.left === null) root.left = newNode;
      else this.insertNode(root.left, newNode)
    } else {
       if (root.right === null) root.right = newNode;
       else this.insertNode(root.right, newNode);
    }
  }

  preOrder(node = this.root) {
    //implementation from the previous challenge
    if(node === null) return '';
    const data = node.data;
    return `${data} ${this.preOrder(node.left)}${this.preOrder(node.right)}`;
  }
}


function binarySearchTree(array) {
  const tree = new BST()
  array.forEach(e => tree.insert(e))
  return tree.preOrder()
}

console.log(binarySearchTree([8, 3, 10, 1, 6, 14, 4, 7, 13]))
// => "8 3 1 6 4 7 10 14 13"

module.exports = binarySearchTree
