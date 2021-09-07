// 前序遍历：访问根–>遍历左子树–>遍历右子树;
// 中序遍历：遍历左子树–>访问根–>遍历右子树;
// 后序遍历：遍历左子树–>遍历右子树–>访问根;
// 广度遍历：按照层次一层层遍历;
export const Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
}

var callback = item => console.log(item);
export default class BinaryTree {
    constructor() {
        this.root = null;
    }

    // 插入节点（按二叉搜索树要求）
    insert (key) {
        let newNode = new Node(key);
        if (this.root == null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode (node, newNode) {
        if (newNode.key < node.key) {
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
            callback(node.key);
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
            callback(node.key);
            this.traverseNodesLDR(node.right, callback);
        }
    }

    // 查找最小值
    min () {
        let current = this.root;
        while (current.left != null) {
            current = current.left;
        }
        return current.key;
    }
    // 查找最大值
    max = function () {
        let current = this.root;
        while (current.right != null) {
            current = current.right;
        }
        return current.key;
    }

    //删除节点
    removeNode = function (node, key) {
        if (node === null) {
            return null
        }
        if (key < node.key) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = this.removeNode(node.right, key);
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
            node.key = minNode.key;
            //4.3删除右子树最小的节点
            node.right = this.removeNode(node.right, minNode.key);
            return node
        }
    }

    deleteNode = function (key) {
        this.removeNode(this.root, key);
    }

}
