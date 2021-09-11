export function timeCount (fn) {
  const now = Date.now();
  fn & fn()
  console.log('count', Date.now() - now);
}