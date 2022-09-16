/**
 * 给定一个二叉树，返回所有从根节点到叶子结点的路径
说明：叶子结点是指没有子节点的结点
树输入按层序遍历序列化表示，每组子节点由空值分割（参见示例）
示例：
输入：root = [1, 2, 3, null, 5]
输出：["1->2->5", "1->3"]
解释：所有根节点到叶子结点的路径为：1-2-5，1-3
 */

// function TreeNode(val, left, right) {
//   this.val = (val===undefined ? 0 : val)
//   this.left = (left===undefined ? null : left)
//   this.right = (right===undefined ? null : right)
// }
import Binary from '../utils/binary-tree';

function binaryTreePathsO(pRoot) {
  const paths = [];
  const constructPaths = (root, PPath) => {
    let path = PPath;
    if (root) {
      console.trace();
      path += root.val.toString();
      if (root.left === null && root.right === null) {
        // 当前节点是叶子节点
        paths.push(path); // 把路径加入到答案中
      } else {
        path += '->'; // 当前节点不是叶子节点，继续递归遍历
        constructPaths(root.left, path);
        constructPaths(root.right, path);
      }
    }
  };
  constructPaths(pRoot, '');
  return paths;
}

function binaryTreePathsT(root) {
  const paths = [];
  if (root === null) {
    return paths;
  }
  const nodeQueue = [root];
  const pathQueue = [root.val.toString()];

  while (nodeQueue.length) {
    const node = nodeQueue.shift();
    const path = pathQueue.shift();

    if (node.left === null && node.right === null) {
      paths.push(path);
    } else {
      if (node.left !== null) {
        nodeQueue.push(node.left);
        pathQueue.push(`${path}->${node.left.val.toString()}`);
      }

      if (node.right !== null) {
        nodeQueue.push(node.right);
        pathQueue.push(`${path}->${node.right.val.toString()}`);
      }
    }
  }
  return paths;
}

const arr = [1, 2, 3, null, 5];
//    1
//   / \
//  2   3
//   \
//    5
const b = new Binary().initFromArray(arr);
console.log('b', binaryTreePathsO(b.root), binaryTreePathsT(b.root));

const arr2 = [3, 9, 20, null, null, 15, 7];
// 3
// / \
// 9  20
//  /  \
// 15   7
const c = new Binary().initFromArray(arr2);
console.log('c', binaryTreePathsO(c.root), binaryTreePathsT(c.root));

// https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/5/19/16acbc19a94dac99~tplv-t2oaga2asx-watermark.awebp
const d = new Binary();
[6, 2, 3, 4, 9, 8, 7, 12, 1, 22].forEach((v) => {
  d.insert(v);
});
console.log(`
// 如图1中序遍历结果：1 2 3 4 6 7 8 9 12 22
// 如图1前序遍历结果：6 2 1 3 4 9 8 7 12 22
// 如图1后序遍历结果：1 4 3 2 7 8 22 12 9 6
`);
// 如图1中序遍历结果：1 2 3 4 6 7 8 9 12 22
// 如图1前序遍历结果：6 2 1 3 4 9 8 7 12 22
// 如图1后序遍历结果：1 4 3 2 7 8 22 12 9 6
console.log('d', d.root, d.middleTraverse(), d.preTraverse(), d.afterTraverse());

console.log('b', d.breadthTraversal());
