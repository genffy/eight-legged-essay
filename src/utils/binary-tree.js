// 前序遍历：访问根–>遍历左子树–>遍历右子树;
// 中序遍历：遍历左子树–>访问根–>遍历右子树;
// 后序遍历：遍历左子树–>遍历右子树–>访问根;
// 广度遍历：按照层次一层层遍历;
export const Node = function (val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var callback = item => console.log(item);
export default class BinaryTree {
    constructor() {
        this.root = null;
    }

    // 插入节点（按二叉搜索树要求）
    insert (val) {
        let newNode = new Node(val);
        if (this.root == null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode (node, newNode) {
        if (newNode.val === null) {
            return;
        }
        if (newNode.val < node.val) {
            if (node.left == null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right == null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }


    //前序遍历
    DLR (callback) {
        this.traverseNodesDLR(this.root, callback);
    }
    traverseNodesDLR (node, callback) {
        if (node != null) {
            callback(node.val);
            this.traverseNodesDLR(node.left, callback);
            this.traverseNodesDLR(node.right, callback)
        }
    }

    // 中序遍历
    LDR (callback) {
        this.traverseNodesLDR(this.root, callback);
    }

    traverseNodesLDR = function (node, callback) {
        if (node) {
            this.traverseNodesLDR(node.left, callback);
            callback(node.val);
            this.traverseNodesLDR(node.right, callback);
        }
    }

    // 查找最小值
    min () {
        let current = this.root;
        while (current.left != null) {
            current = current.left;
        }
        return current.val;
    }
    // 查找最大值
    max = function () {
        let current = this.root;
        while (current.right != null) {
            current = current.right;
        }
        return current.val;
    }

    //删除节点
    removeNode = function (node, val) {
        if (node === null) {
            return null
        }
        if (val < node.val) {
            node.left = this.removeNode(node.left, val);
            return node;
        } else if (val > node.val) {
            node.right = this.removeNode(node.right, val);
            return node;
        } else {
            //删除节点
            //1、删除没有左右子树的节点
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            //2、删除只有右子树的节点
            if (node.left === null) {
                node = node.right;
                return node;
            }
            //3、删除只有左子树的节点
            if (node.right === null) {
                node = node.left;
                return node;
            }
            //4、删除左右子树都有的节点

            //4.1查找右子树中最小的节点N，
            var minNode = getMinNode(node.right);
            //4.2用N替换需要删除的节点，
            node.val = minNode.val;
            //4.3删除右子树最小的节点
            node.right = this.removeNode(node.right, minNode.val);
            return node
        }
    }

    deleteNode = function (val) {
        this.removeNode(this.root, val);
    }

}

function TreeNode (val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
export class LeetCodeTree {
    root = null
    constructor(array) {
        if(array.length == 0){
            return this.root;
        }
        const len = array.length;
        this.root = new TreeNode(array[0]);
        const nodeList = [this.root];
        let index = 0;
        while (index < len) {
            index++;
            if (index >= len) {
                return this;
            }
            const currNode = nodeList.shift();
            const leftChild = new TreeNode(array[index]);
            if (leftChild.val != null) {
                currNode.left = leftChild;
                nodeList.push(leftChild);
            }
            index++;
            if (index >= len) {
                return this;
            }
            const rightChild = new TreeNode(array[index]);
            if (rightChild.val != null) {
                currNode.right = rightChild;
                nodeList.push(rightChild);
            }

        }
        return this;
    }
    // 深度遍历
    //  前序遍历
    //  中序遍历
    //  后序遍历
    // 广度遍历
    preTraverse() {
        const output = [];
        function getNodeVal(node, arr) {
            if(node != null){
                arr.push(node.val);
                getNodeVal(node.left, arr);
                getNodeVal(node.right, arr);
            }
        }
        getNodeVal(this.root, output);
        return output;
    }
    middleTraverse() {
        const output = [];
        function getNodeVal(node, arr) {
            if(node != null){
                getNodeVal(node.left, arr);
                arr.push(node.val);
                getNodeVal(node.right, arr);
            }
        }
        getNodeVal(this.root, output);
        return output;
    }
    afterTraverse() {
        const output = [];
        function getNodeVal(node, arr) {
            if(node != null){
                getNodeVal(node.right, arr);
                getNodeVal(node.left, arr);
                arr.push(node.val);
            }
        }
        getNodeVal(this.root, output);
        return output;
    }
}