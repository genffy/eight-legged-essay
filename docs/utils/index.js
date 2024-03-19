export default function timeCount(fn) {
  const now = Date.now();
  if (typeof fn === 'function') {
    fn();
  }
  console.log('count', Date.now() - now);
}
