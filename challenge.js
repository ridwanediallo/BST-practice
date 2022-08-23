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

  insert(node, current_node = this.root) {
    //your code here
    if(this.root === null) {
      this.root = node
      return
    }

    if(current_node === null) {
      return node
    }

    if(node.data <= current_node.data) {
      current_node.left = this.insert(node, current_node.left)
    }else{
      current_node.right = this.insert(node, current_node.right)
    }
    return current_node
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
  array.forEach(e => tree.insert(new Node(e)))
  return tree.preOrder()
}

console.log(binarySearchTree([8, 3, 10, 1, 6, 14, 4, 7, 13]))
// => "8 3 1 6 4 7 10 14 13"

module.exports = binarySearchTree
