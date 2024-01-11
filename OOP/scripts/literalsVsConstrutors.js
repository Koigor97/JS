"use strict";

const strLiteral = "string literal";
const strObj = new String("string object");

console.log(strLiteral, typeof strLiteral);
console.log(strObj, typeof strObj);

// boxing
console.log(strLiteral.toUpperCase());
console.log(strObj[5].toUpperCase());

// unboxing
console.log(strObj.valueOf(), typeof strObj.valueOf());

// Other types
const numLiteral = 123;
const numObj = new Number(123);
console.log(numLiteral, typeof numLiteral);
console.log(numObj, typeof numObj);

const boolLiteral = true;
const boolObj = new Boolean(true);
console.log(boolLiteral, typeof boolLiteral);
console.log(boolObj, typeof boolObj);

const arrLiteral = [1, 2, 3];
const arrObj = new Array(1, 2, 3);
console.log(arrLiteral, typeof arrLiteral);
console.log(arrObj, typeof arrObj);

const objLiteral = { a: 1 };
const objObj = new Object({ a: 1 });
console.log(objLiteral, typeof objLiteral);
console.log(objObj, typeof objObj);

const funcLiteral = function () {};
const funcObj = new Function();
console.log(funcLiteral, typeof funcLiteral);
console.log(funcObj, typeof funcObj);

const dateLiteral = new Date();
const dateObj = new Date();
console.log(dateLiteral, typeof dateLiteral);
console.log(dateObj, typeof dateObj);
