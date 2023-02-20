//let js = "amazing";
//console.log(40 + 8 + 23 - 10);

// Declaring VARIABLES (let firstName=) and assigning VALUES ("Samuel")
//to variables.
//let firstName = "Sarah";
//console.log(firstName);

//let country = "Sierra Leone";
//let continent = "Africa";
//let population = 7_000_000;

//console.log(country)
//console.log(continent)
//console.log(population)

// Learning DATA-TYPES (number, string, boolean, undefined, null, symbol, and big int)
// The three most IMPORTANT data-types are:
// let age = 25;   // Number
// let surName = "Turay";  // String
// let fullAge = true;  // Boolean

// // And the rest are:
// let children;   // Udefined (empty value)
// null    // Also means empty value but use differently
// Symbol  // Symbol (ES2015); these are unique values that cannot be changed
// BigInt  // Larger integers than the Number type can hold. (They are too large displayed)

// let javaScriptIsCool = true;
// console.log(javaScriptIsCool);
// console.log(typeof javaScriptIsCool);

// // Dynamic typing
// javaScriptIsCool = "YES"
// console.log(javaScriptIsCool)
// console.log(typeof javaScriptIsCool)

// console.log(typeof null)

// let isIsland = false;
// let language;
// console.log(isIsland);
// console.log(language);

// Three different ways to declare a variable - let, const, var.
//let age = 30; // let - allows you to mutate the variable.
//age = 31;

//const birthYear = 1991;
// birthYear = 2004;   // const - is constant and cannot mutate, niether can we define an empty const. This gives an error.

//var greeting = "Hello"; // NEVER use var
//console.log(greeting)

/// Basic mathematical operators; +, -, /, *, =, ===, >, <, etc.
// const nowYear= 2022;
// const sarahAge = nowYear - 1997;
// const ageSam = nowYear - 1997;

// let sarah = (sarahAge * 2) ** ageSam;
// let sam = (ageSam / 5) + 25

// console.log(sam);

// let x, y;
// x = y = 25 + 10 - 5;

// console.log(x, y);

// CODING CHALLENGE?/EXERCISE - BMI CALCULATION
// Mark and John are trying to compare their BMI (Body Mass Index),
// which is calculated using this formula: BMI = mass / height ** 2 = mass / (height * height)
// (mass in kg and height in meter).

// TASK 1: Store Mark's and John's mass and height in variables.
// const johnsWeight = Number(prompt("John your weight in kg: "));
// const johnsHeight = Number(prompt("John your height in meters: "));

// const marksWeight = Number(prompt("Mark your weight in kg: "));
// const marksHeight = Number(prompt("Mark your height in meters: "));

// // TASK 2: Calculate both their BMI's using the formula. (I can even implement both versions)
//  const johnBmi = parseFloat(johnsWeight / johnsHeight ** 2).toFixed(2);
//  const markBmi = parseFloat(marksWeight / (marksHeight * marksHeight)).toFixed(2);

//  // TASK 3: Create a Boolean variable 'markHigherBmi' to check who has a higher BMI.
//  const markHigherBmi = markBmi > johnBmi ;

//  if (markHigherBmi) {
//     console.log("Mark's BMI is higher than John, with status:"+ markHigherBmi + "("+markBmi+" - "+johnBmi+")");
//  }
//  else {
//     console.log("Mark's BMI is lesser than John, with status:"+ markHigherBmi + "("+markBmi+" - "+johnBmi+")");
//  }

// Strings and Template literals.
//const firstName = "Samuel";
//const job = "Software Engineer";
//const birthYear = 1997;
//const year = 2022;
//
//const sam = `I'm ${firstName}, a ${job} at the age of ${year - birthYear}`
//console.log(`Hello,`, sam)

// Switch statement.
// const day = "monday";

// switch(day) {
//     case "monday":
//         console.log("Clean the kitchen");
//         break;
//     case "tuesday":
//         console.log("Complete weekly readings");
//         break;
//     case "wednesday":
//     case "thursday":
//     case "friday":
//         console.log("Complete all school activities.");
//         break;
//     default:
//         console.log("Not a valid day");
// }

// const age = 18;
// age >= 25 ? console.log("I need help") : console.log("No you dont");

// const looping = {
//     name: "Samuel",
//     occupation: "Frontend Programmer",
//     birth: 1997,
//     gender: "Male",
// };

// for (let i = 0; i < looping.length; i++) {
//     console.log(looping[i]);
// }
