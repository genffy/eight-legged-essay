// 前序遍历：访问根–>遍历左子树–>遍历右子树;
// 中序遍历：遍历左子树–>访问根–>遍历右子树;
// 后序遍历：遍历左子树–>遍历右子树–>访问根;
// 广度遍历：按照层次一层层遍历;
export function TreeNode (val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
export default class Binary {
    root = null
    constructor() { }
    initFromArray (array) {
        if (array.length == 0) {
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
    // 插入节点（按二叉搜索树要求）
    insert (val) {
        let newNode = new TreeNode(val);
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
    // 深度遍历
    //  前序遍历
    //  中序遍历
    //  后序遍历
    // 广度遍历
    preTraverse () {
        function getNodeVal (node, arr) {
            if (node != null) {
                arr.push(node.val);
                getNodeVal(node.left, arr);
                getNodeVal(node.right, arr);
            }
            return arr;
        }
        return getNodeVal(this.root, []);
    }
    middleTraverse () {
        function getNodeVal (node, arr) {
            if (node != null) {
                getNodeVal(node.left, arr);
                arr.push(node.val);
                getNodeVal(node.right, arr);
            }
            return arr;
        }
        return getNodeVal(this.root, []);
    }
    afterTraverse () {
        function getNodeVal (node, arr) {
            if (node != null) {
                getNodeVal(node.right, arr);
                getNodeVal(node.left, arr);
                arr.push(node.val);
            }
            return arr;
        }
        return getNodeVal(this.root, []);
    }
    breadthTraversal () {
        function traverse (node, arr) {
            if (node != null) { //判断二叉树是否为空
                var que = [node]; //将二叉树放入队列
                while (que.length !== 0) { //判断队列是否为空
                    node = que.shift(); //从队列中取出一个结点
                    arr.push(node.val); //将取出结点的值保存到数组
                    if (node.left) que.push(node.left); //如果存在左子树，将左子树放入队列
                    if (node.right) que.push(node.right); //如果存在右子树，将右子树放入队列
                }
                return arr;
            }
        }
        return traverse(this.root, []);
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
    max () {
        let current = this.root;
        while (current.right != null) {
            current = current.right;
        }
        return current.val;
    }
    removeNode(node, val) {
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
            var minNode = this.min(node.right);
            //4.2用N替换需要删除的节点，
            node.val = minNode.val;
            //4.3删除右子树最小的节点
            node.right = this.removeNode(node.right, minNode.val);
            return node
        }
    }

    deleteNode (val) {
        this.removeNode(this.root, val);
    }
}