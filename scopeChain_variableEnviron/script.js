"use strict";

// Understanding how Scope and Scope chain work in the different types of Scope -
// (Global scope, Function scope, Block scope)
// function calcAge(birthyear) {
//   const age = 2022 - birthyear;
//   console.log(lastName);

//   function printAge() {
//     const output = `Hello ${lastName}, you are ${age}, born in ${birthyear}`;
//     console.log(output);

//     if (birthyear >= 1981 && birthyear <= 1996) {
//       var millenial = true;
//       const str = `Oh, you're a millenial, ${lastName}`;
//       console.log(str);

//       function add(a, b) {
//         return (a + b) ** 2;
//       }
//     }
//     console.log(millenial);
//     //add(2, 5);
//   }
//   printAge();

//   return age;
// }

// const lastName = "Turay";
// console.log(calcAge(1996));

// Hoisting with variables. (TDZ)
// console.log(me);
// console.log(job);
// console.log(year);

// var me = "John";
// let job = "teacher";
// const year = 1997;

// the 'This' keyword.

// const calcAge = function (birthyear) {
//   console.log(2037 - birthyear);
//   console.log(this);
// };

// calcAge(1997);

// const calcAgeArrow = birthyear => {
//   console.log(2037 - birthyear);
//   console.log(this);
// };

// calcAgeArrow(1997);

// const jonas = {
//   firstName: "Jonas",
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.calcAge();
