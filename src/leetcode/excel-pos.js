export default function convertToTitle(pN) {
  let res = '';
  let n = pN;
  while (n > 0) {
    const a = (n - 1) % 26;
    n = (n - 1) / 26;
    res = String.fromCharCode(a + 65) + res;
  }
  return res;
}

console.log(convertToTitle(12));
