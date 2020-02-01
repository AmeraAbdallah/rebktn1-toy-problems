// Given a binary tree, flatten it to a linked list in-place.

// For example, given the following tree:

//     1
//    / \
//   2   5
//  / \   \
// 3   4   6
// The flattened tree should look like:

// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//             6




/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

 // Node class 
class Tree { 
    constructor(value) { 
        this.value = value; 
        this.left = null; 
        this.right = null;
    } 

    map = (cb) => {
        cb(this.value);
        if(this.right){
            this.right.map(cb);
        }
        if(this.left){
            this.left.map(cb);
        }
    }
} 

let root = new Tree(1);
root.left = new Tree(2);
root.left.left = new Tree(3);
root.left.right = new Tree(4);
root.right = new Tree(5);
root.right.right = new Tree(6);

let flatten = function (root) {
    let array = [];
    root.map((value) => array.push(value));
    array = array.sort((a, b) => a - b);
    let fromArrayToFlattenTree = (root, array) => {
        array = array.slice(1);
        if(array.length === 0) return;
        root.right = new Tree(array[0]);
        root.left = null;
        fromArrayToFlattenTree(root.right, array);
    }
    root.value = array[0];
    fromArrayToFlattenTree(root, array);
};

flatten(root);

root;