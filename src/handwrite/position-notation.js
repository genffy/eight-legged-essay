import { stringAddtion, stringDifference } from '../utils/math-number';
// 参考文章，讲的非常详细 https://www.cnblogs.com/web-record/p/11132861.html
/*
  * EQU - 等于：equal 
  * NEQ - 不等于：not equal
  * LSS - 小于：less than
  * LEQ - 小于或等于：equal or less than
  * GTR - 大于：greater than
  * GEQ - 大于或等于：equal or greater than
*/
export class TenTo2 {
  /**
  * @name integerLEQZero
  * @description 大于或者等于 0 的整数转换为二进制
  * @param {number} number
  * @return 二进制字符串
  */
  integerGEQZero (number) {
    let result = '';
    while (number >= 1) {
      result = number % 2 + result;
      number = Math.floor(number / 2);
    }
    return result;
  }
  /**
  * @name integerLSSZero
  * @description 小于 0 的整数转换为二进制
  * @param {number} number
  * @return 二进制字符串
  */
  integerLSSZero (number) {
    let result = '';
    // 转正
    number = -number;
    // 求二进制并取反
    while (number >= 1) {
      if (number % 2 === 1) {
        result = '0' + result;
      } else {
        result = '1' + result;
      }
      number = Math.floor(number / 2);
    }
    // 补全
    if (result.length < 8) {
      result = '1'.repeat(8 - result.length) + result;
    }
    // 加一
    result = stringAddtion(result, '1', 2);
    return result;
  }

  /**
  * @name floorGTROne
  * @description 大于 1 的小数转二进制
  * @param {number} number
  * @return 二进制字符串
  */
  floorGTROne (number) {
    let result = '';
    const integer = Math.floor(number);
    const decimal = number - integer;
    result += this.integerGEQZero(integer) + '.' + this.floorBetweenZeroOne(decimal).split('.')[1];
    return result;
  }

  /**
  * @name floorBetweenZeroOne
  * @description 大于 0 小于 1 的小数转二进制
  * @param {number} number
  * @return 二进制字符串
  */
  floorBetweenZeroOne (number) {
    let result = '';
    while (
      number != 0
      && number != 1 // 取值到 0 或者 1 为止
      && result.length < 32 // 或者长度达到需要
    ) {
      // 取小数部分
      if (number > 1) {
        number = number - 1;
      }
      result = result + Math.floor(number * 2);
      number = number * 2;
    }
    result = '0.' + result;
    return result;
  }
  // 负小数
  floorGTROneLSSZero() {

  }

  /**
  * @name decimalToBinary
  * @description 正负整数转二进制
  * @param {any} number 需要转换的数字
  * @return 二进制字符串
  */
  decimalToBinary (number) {
    let result = '';

    if (Number.isInteger(number) && number >= 0) { // 正整数
      result = this.integerGEQZero(number);
    } else if (Number.isInteger(number) && number < 0) { // 负整数
      result = this.integerLSSZero(number);
    } else if (!Number.isInteger(number) && number > 0 && number < 1) { // 正小数（不带整数位）
      result = this.floorBetweenZeroOne(number);
    } else if (!Number.isInteger(number) && number > 1) { // 正小数（带整数位）
      result = this.floorGTROne(number);
    } else if (!Number.isInteger() && number < 0) {
      result = this.floorGTROneLSSZero(number);
    }

    return result;
  }
}


const tenTo2 = new TenTo2();
// 正整数转二进制 [0, n]
console.log(tenTo2.decimalToBinary(10)); // 1010
console.log(tenTo2.decimalToBinary(42)); // 101010

// 负整数转二进制 [n, 0)
console.log(tenTo2.decimalToBinary(-10)); // 11110110
console.log(tenTo2.decimalToBinary(-42)); // 11010110

// 小数转二进制 (0, 1)
console.log(tenTo2.decimalToBinary(0.125)); // 0.001
console.log(tenTo2.decimalToBinary(0.8125)); // 0.1101

// 小数转二进制 (1, n)
console.log(tenTo2.decimalToBinary(6.125)) // 110.001
console.log(tenTo2.decimalToBinary(173.8125)) // 10101101.1101

// 负小数转二进制 [n, 0)
console.log(tenTo2.decimalToBinary(-0.546)) // 110.001
console.log(tenTo2.decimalToBinary(-173.8125)) // 10101101.1101

export class TwoTo10 {
  /*
  * 英文荒漠 jsliang 查找的缩写
  * EQU - 等于：equal 
  * NEQ - 不等于：not equal
  * LSS - 小于：less than
  * LEQ - 小于或等于：equal or less than
  * GTR - 大于：greater than
  * GEQ - 大于或等于：equal or greater than
*/

  /**
  * @name integerLEQZero
  * @description 大于或者等于 0 的二进制转换为整数
  * @param {string} binary
  * @return 整数
  */
  integerGEQZero (binary) {
    let result = 0;

    const index = binary.indexOf('1');
    const newBinary = binary.slice(index).split('').reverse('').join(''); // 截取 1 后面的，然后从最后往前取
    for (let i = 0; i < newBinary.length; i++) {
      result += newBinary[i] * Math.pow(2, i);
    }

    return result;
  }

  /**
  * @name integerLSSZero
  * @description 小于 0 的二进制转换为整数
  * @param {string} binary
  * @return 整数
  */
  integerLSSZero (binary) {
    let result = 0;

    // 减一
    binary = stringDifference(binary, '1', 2);
    let reverseBinary = ''; // 取反
    for (let i = 0; i < binary.length; i++) {
      if (binary[i] === '0') {
        reverseBinary += '1';
      } else {
        reverseBinary += '0';
      }
    }
    result = -(this.integerGEQZero(reverseBinary));

    return result;
  }

  /**
  * @name floorGTROne
  * @description 大于 1 的二进制转小数
  * @param {string} binary
  * @return 小数
  */
  floorGTROne (binary) {
    let result = 0;

    const [integer, decimal] = binary.split('.');
    result = this.integerGEQZero(integer) + this.floorBetweenZeroOne('0.' + decimal);

    return result;
  }

  /**
  * @name floorBetweenZeroOne
  * @description 大于 0 小于 1 的二进制转小数
  * @param {string} binary
  * @return 小数
  */
  floorBetweenZeroOne (binary) {
    let result = 0;

    binary = binary.replace('.', ''); // 去掉小数点

    for (let i = 0; i < binary.length; i++) {
      result += Number(binary[i]) * Math.pow(2, -i);
    }

    return result;
  }

  /**
  * @name binaryToDecimal
  * @description 二进制转十进制
  * @param {string} binary
  * @return 十进制整数
  */
  binaryToDecimal (binary) {
    let result = 0; // 设置结果集

    if (!binary.includes('.')) { // 不带小数点的

      // 不足 8 位则补全 8 位
      if (binary.length < 8) {
        binary = '0'.repeat(8 - binary.length) + binary;
      }

      if (binary[0] === '0') { // 首位为 0 则是正整数 [0, n]
        result = this.integerGEQZero(binary);
      } else if (binary[0] === '1') { // 首位为 1 则是负整数 [n, 0)
        result = this.integerLSSZero(binary);
      }
    } else { // 带小数点的

      if (binary.split('.')[0] === '0') { // 如果整数部位只有 0 (0, 1)
        result = this.floorBetweenZeroOne(binary);
      } else { // 如果整数部位大于 0 (1, n)
        result = this.floorGTROne(binary);
      }
    }
    return result;
  }
}
const twoTo10 = new TwoTo10();
// 二进制转正整数 [0, n]
console.log(twoTo10.binaryToDecimal('1010')); // 10
console.log(twoTo10.binaryToDecimal('101010')); // 42

// 二进制转负整数 [n, 0)
console.log(twoTo10.binaryToDecimal('11101011')); // -21
console.log(twoTo10.binaryToDecimal('11110110')); // -10
console.log(twoTo10.binaryToDecimal('11010110')); // -42

// 二进制转小数 (0, 1)
console.log(twoTo10.binaryToDecimal('0.001')); // 0.125
console.log(twoTo10.binaryToDecimal('0.1101')); // 0.8125

// 二进制转小数 (1, n)
console.log(twoTo10.binaryToDecimal('110.001')); // 6.125
console.log(twoTo10.binaryToDecimal('10101101.1101')); // 173.8125
