console.log(process.uptime());
setImmediate(() => {
  console.log("setImmediate");
});
setTimeout(() => {
  console.log("setTimeout");
}, 0);
Promise.resolve().then(() => {
  console.log("Promise");
});
process.nextTick(() => {
  console.log("nextTick");
});
console.log(process.uptime());
process.exit(0);
