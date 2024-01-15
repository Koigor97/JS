// creating symbols
let sym1 = Symbol();
let sym2 = Symbol("foo");
const sym3 = Symbol("bar");

console.log(typeof sym1, sym1);
console.log(typeof sym2, sym2);
console.log(typeof sym3, sym3);

console.log(Symbol("foo") === Symbol("bar"));

const user = {};
