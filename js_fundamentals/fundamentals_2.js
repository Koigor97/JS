"use srict"; // Also known as strict mode. It helps with displaying bugs on the console,
// Making it easier for you to write proper code.

// JavaScript function...
//Function declaration
// function pizzaMaker(size, type) {
//     const sizes = ["small", "medium", "large"];
//     const pizzaType = ["pepperoni pizza", "hawaiian pizza", "crispy beacon pizza"];
//     let choice = size;
//     let kind = type;
//     let pizza;
//     if (sizes.includes(choice) && pizzaType.includes(kind)) {
//         pizza = `One ${choice} ${kind} coming right up`;
//     }else {
//         pizza = `We are out of ${choice} ${kind}`;
//     }

//     return pizza
// }

// const order = pizzaMaker("medium", "hawaiian pizza");
// console.log(order);

// function ageCalc(birthYear, currentYear) {
//      currentYear - birthYear;
//     return
// }

// const yourAge = ageCalc(1995, 2022);
// console.log(yourAge);

// Function expression
// const age = 2022 - 1995;
// const isTrue = function(verify) {
//     verify >= 27 ? verify = true : verify = false;
//     return verify
// }
// console.log(isTrue(age));

// Arrow function
// let userName = prompt("What is your name: ");
// const greetings = sayhello => `Hello ${sayhello}, my name is MacOS`;
// const hello = greetings(userName);

// function helpLine(user) {
//     const query = Number(prompt(`${user}. Press 1 for Query: `));
//     if (query === 1) console.log(`An agent would be with you soon ${userName}`);}

// console.log(helpLine(hello));

// Arrays
// const greetings = ["Hola", "bonjour", "Hello", "Salaam", "Nihow"];
// console.log(greetings.length);
// greetings.push("Konichiwa");
// console.log(greetings);

// let userFirstName = prompt("Enter your first name: ");
// let userSurname = prompt("Enter your surname name: ");
// let userJob = prompt("Enter your occupation: ");
// let userBirthYear = Number(prompt("Enter your birthyear: "));

// const userInfo = {
//     firstName: userFirstName,
//     lastName: userSurname,
//     job: userJob,
//     birthYear: userBirthYear,

//     isEligible: function () {
//         this.age = (2022 - this.birthYear) >= 18 ? true : false;
//         return this.age
//     },

//     canDrive: function () {
//         return this.isEligible() ? `is eligible to Drive.` :
//         `is not eligible to Drive.`
//     }
// };

// console.log(`Mr.${userInfo.lastName} the ${userInfo.job} ${userInfo.canDrive()}`)

// const joe = [
//     "Samuel",
//     "Frontend Programmer",
//     1997,
//     "Male",
//     ["James", "Joe", "Kevin"],
// ]
