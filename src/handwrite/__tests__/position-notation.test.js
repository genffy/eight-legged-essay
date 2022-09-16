import { TenTo2, TwoTo10 } from '../position-notation';

const tenTo2 = new TenTo2();
test('正整数转二进制 [0, n]', () => {
  expect(tenTo2.decimalToBinary(10)).toBe(1010);
  expect(tenTo2.decimalToBinary(42)).toBe(101010);
});

test('负整数转二进制 [n, 0)', () => {
  expect(tenTo2.decimalToBinary(-10)).toBe(11110110);
  expect(tenTo2.decimalToBinary(-42)).toBe(11010110);
});

test('小数转二进制 (0, 1)', () => {
  expect(tenTo2.decimalToBinary(0.125)).toBe(0.001);
  expect(tenTo2.decimalToBinary(0.8125)).toBe(0.1101);
});

test('小数转二进制 (1, n)', () => {
  expect(tenTo2.decimalToBinary(6.125)).toBe(110.001);
  expect(tenTo2.decimalToBinary(173.8125)).toBe(10101101.1101);
});

test('负小数转二进制 [n, 0)', () => {
  expect(tenTo2.decimalToBinary(-0.546)).toBe(110.001);
  expect(tenTo2.decimalToBinary(-173.8125)).toBe(10101101.1101);
});

const twoTo10 = new TwoTo10();
test('二进制转正整数 [0, n]', () => {
  expect(twoTo10.binaryToDecimal('1010')).toBe(10);
  expect(twoTo10.binaryToDecimal('101010')).toBe(42);
});

test('二进制转负整数 [n, 0)', () => {
  expect(twoTo10.binaryToDecimal('11101011')).toBe(-21);
  expect(twoTo10.binaryToDecimal('11110110')).toBe(-10);
});

expect(twoTo10.binaryToDecimal('11010110')).toBe(-42);

test('二进制转小数 (0, 1)', () => {
  expect(twoTo10.binaryToDecimal('0.001')).toBe(0.125);
  expect(twoTo10.binaryToDecimal('0.1101')).toBe(0.8125);
});

test('二进制转小数 (1, n)', () => {
  expect(twoTo10.binaryToDecimal('110.001')).toBe(6.125);
  expect(twoTo10.binaryToDecimal('10101101.1101')).toBe(173.8125);
});
