// 155. Min Stack
/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.stack = []
    this.sortStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(this.sortStack.length == 0 || x <= this.min()){
        this.sortStack.push(x)
    }
    this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const x = this.top()
    if(this.min() === x){
        this.sortStack.pop()
    }
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.sortStack[this.sortStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
 const minStack = new MinStack();
 minStack.push(-2);
 minStack.push(0);
 minStack.push(-3);
 console.log(minStack.min()); //   --> 返回 -3.
 console.log(minStack.pop());
 console.log(minStack.top());//   --> 返回 0.
 console.log(minStack.min());//   --> 返回 -2.