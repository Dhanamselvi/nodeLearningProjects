require("./xyz");
const { sum, x } = require("./sum");

const a = 10;
const b = 20;

sum(a, b);
console.log(x);

console.log(globalThis === global); // true
