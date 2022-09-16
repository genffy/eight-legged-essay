export function ListNode(val, next) {
  this.val = val === undefined ? null : val;
  this.next = next === undefined ? null : next;
}
// copy from https://github.com/wangzheng0822/algo/blob/master/javascript/06_linkedlist/SinglyLinkedList.js
export default class LinkedList {
  constructor() {
    this.head = new ListNode('head');
  }

  // 根据value查找节点
  findByValue(item) {
    let currentNode = this.head.next;
    while (currentNode !== null && currentNode.val !== item) {
      currentNode = currentNode.next;
    }
    console.log(currentNode);
    return currentNode === null ? -1 : currentNode;
  }

  // 根据index查找节点，下标从0开始
  findByIndex(index) {
    let currentNode = this.head.next;
    let pos = 0;
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next;
      pos += 1;
    }
    console.log(currentNode);
    return currentNode === null ? -1 : currentNode;
  }

  // 向链表末尾追加节点
  append(newElement) {
    const newNode = new ListNode(newElement);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  // 指定元素向后插入
  insert(newElement, val) {
    const currentNode = this.findByValue(val);
    if (currentNode === -1) {
      console.log('未找到插入位置');
      return;
    }
    const newNode = new ListNode(newElement);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  // 查找前一个
  findPrev(item) {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.val !== item) {
      currentNode = currentNode.next;
    }
    if (currentNode.next === null) {
      return -1;
    }
    return currentNode;
  }

  // 根据值删除
  remove(item) {
    const prevNode = this.findPrev(item);
    if (prevNode === -1) {
      console.log('未找到元素');
      return;
    }
    prevNode.next = prevNode.next.next;
  }

  // 遍历显示所有节点
  display() {
    let currentNode = this.head.next; // 忽略头指针的值
    while (currentNode !== null) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }

  initFromArray(arr) {
    arr.forEach((v) => {
      const node = new ListNode(v);
      this.append(node);
    });
    return this.head;
  }
}
