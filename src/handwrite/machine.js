/**
 * 据说是声网的面试题
 * 实现异步任务链式调用
function machine (name) {}
machine('ygy').execute()
// start ygy (输出)
machine('ygy').do1('eat').execute();
// start ygy (输出)
// ygy eat (输出)
machine('ygy').wait(1).do1('eat').execute();
// start ygy (输出)
// wait 1s（等待1s）
// ygy eat (输出)
machine('ygy').waitFirst(5).do1('eat').execute();
// wait 5s （等待5s）
// start ygy (输出)
// ygy eat  (输出)
 */
// 使用了 promise 的版本
function machineWithPromise(name) {
  const arr = [];
  arr.push(() => {
    return Promise.resolve(`start ${name}`);
  });
  return {
    async execute() {
      for (let i = 0; i < arr.length; i++) {
        const str = await arr[i]();
        console.log(str);
      }
    },
    do1(action) {
      arr.push(() => {
        return Promise.resolve(`${name} ${action}`);
      });
      return this;
    },
    wait(time) {
      arr.push(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(`wait ${time}s`)
          }, time * 1000);
        })
      });
      return this;
    },
    waitFirst(time) {
      arr.unshift(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(`wait ${time}s`)
          }, time * 1000);
        })
      });
      return this
    },
  };
}
// ? 好像这就是一个手写 Promise 的变种？
function machineWithoutPromise(name) {
  const arr = [];
  arr.push(() => {
    doNext(`start ${name}`);
  });
  function doNext(str) {
    if (str) {
      console.log(str);
    }
    const fn = arr.shift()
    fn && fn();
  }
  return {
    execute() {
      doNext();
    },
    do1(action) {
      arr.push(() => {
        doNext(`${name} ${action}`);
      });
      return this;
    },
    wait(time) {
      arr.push(() => {
        setTimeout(function () {
          doNext(`wait ${time}s`);
        }, time * 1000)
      });
      return this;
    },
    waitFirst(time) {
      arr.unshift(() => {
        setTimeout(function () {
          doNext(`wait ${time}s`);
        }, time * 1000)
      });
      return this
    },
  };
}

const machine = machineWithoutPromise;

machine('ygy').execute()
// start ygy (输出)
machine('ygy').do1('eat').execute();
// start ygy (输出)
// ygy eat (输出)
machine('ygy').wait(1).do1('eat').wait(1).do1('eat2').execute();
// start ygy (输出)
// wait 1s（等待1s）
// ygy eat (输出)
// wait 1s（等待1s）
// ygy eat2 (输出)
machine('ygy').waitFirst(5).do1('eat').execute();
// wait 5s （等待5s）
// start ygy (输出)
// ygy eat  (输出)
