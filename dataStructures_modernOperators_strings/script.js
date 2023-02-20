"use strict";

// Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// //Data needed for first part of the section
// const restaurant = {
//   itemName: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   // enhanced object literal
//   openingHours,

//   order(startIndex, mainIndex) {
//     return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
//   },
// };
// // Optional chaining
// console.log(restaurant.openingHours.mon?.open);
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${open}`);
// }

// // On methods
// console.log(restaurant.ordering?.(0, 1) ?? "Methods does not exist");

// // On arrays
// const userInfo = [{ name: "Sarah Parker", email: "s_parker@yahoo.com" }];
// console.log(userInfo[0].name ?? "User array empty");

// // Logical Assignment Operator
// const newRest1 = {
//   name: "Pizza Hut",
//   //vipGuest: 50,
//   vipGuest: 0,
// };

// const newRest2 = {
//   name: "Taco Bella",
//   owner: "Isabella Lopez",
// };

// newRest1.vipGuest = newRest1.vipGuest || 10;
// newRest2.vipGuest = newRest2.vipGuest || 10;

// The ||= assignment operator
// newRest2.vipGuest ||= 10;
// newRest1.vipGuest ||= 10;

// The ??= assignment operator
// newRest2.vipGuest ??= 10;
// newRest2.vipGuest ??= 10;

// The &&= assignment operator
//newRest2.owner = newRest2.owner && "<ANONYMOUS>";
// newRest2.owner &&= "<ANONYMOUS>";

// console.log(newRest1);
// console.log(newRest2);

// const { itemName, openingHours, categories } = restaurant;
// console.log(itemName, openingHours, categories);

// const {
//   itemName: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const arr = [2, 4, 6];
// const [x, y, z] = arr;

// console.log(x, y, z);
// console.log(arr);

// let [first, , second] = restaurant.categories;
// console.log(first, second);
// [first, second] = [second, first];
// console.log([first, second]);
// console.log(restaurant.categories);

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// Spread operator....

// const arr = [7, 8, 9];
// const goodNewArr = [1, 2, ...arr];
// console.log(`${arr}\n${goodNewArr}`);

// const newMenu = [
//   ...restaurant.mainMenu,
//   "Honey Ribbs",
//   "Marinated Roasted Cassava",
// ];
// console.log(newMenu);

// // Copy array.
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Joining two arrays;
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// let testArr = [23, 5, 43, 10];
// let [w, x, y, z] = testArr;
// console.log(`The original array:\nW: ${w}\nX: ${x}\nY: ${y}\nZ: ${z}\n`);

// [w, y] = [y, w];
// [z, w] = [w, z];
// [w, x] = [x, w];
// console.log(`The destructed array:\nW: ${w}\nX: ${x}\nY: ${y}\nZ: ${z}\n`);

// const letSpread = [15, 35, ...testArr, 60, 70];
// console.log(...letSpread);

// const newAdmin = {
//   ...restaurant,
//   manager: "Joey Balto",
//   chiefChef: "Rattatouli",
//   foundedIn: "2058",
// };
// console.log(`\nThe new restaurant info:\n${newAdmin}`);

// The REST spread operator. (You know its a rest spread operator by looking which side it's located
// in relation to the = assign operator).

// 1) For Destructuring.
// SPREAD, because it's assigned RIGHT = ...x
// const arr = [2, 4, ...[6, 8]];
// // console.log(arr);
// // REST, because it's assigned LEFT ...x =
// const [a, b, ...others] = [1, 2, 3, 4];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Object.
// const { sat, ...weekDay } = restaurant.openingHours;
// console.log(weekDay);

// // 2) For Function.
// const add = function (...numbers) {
//   console.log(numbers);
//   console.log(numbers.length);
// };

// // add(2, 10, 45);

// const num = [30, 12, 51, 5];
// add(...num);

// && operator || operator for circuting.
// Logical operators can use ANY data types, return ANY data type, and short-circuiting
// console.log("------------------OR-------------------");

// console.log(4 || "Sam");
// console.log("" || "Sam");
// console.log(true || 0);
// console.log(undefined || null);
console.log();
// const guest1 = restaurant.numGuests ? restaurant.numGuests : "No such value";
// console.log(guest1);
// console.log();
// restaurant.numGuests = restaurant.numGuests || 10;
// console.log(restaurant);
// // Using the AND logical operator for short circuting
// console.log("-----------------AND-------------------");

// console.log(4 && "Sam");
// console.log("" && "Sam");
// console.log(true && 0);
// console.log(undefined && null);

// // Practical example.
// if (restaurant.order) {
//   const order1 = restaurant.order(2, 1);
//   console.log(order1);
// }

// const order2 = restaurant.order && restaurant.order(1, 2);
// console.log(order2);

// We can use the || operator to set default values and the && operator to execute code
// in the second operand if the first one is true.

// Nullish Coalescing Operator (??)

// restaurant.numGuests = 0;
// const guest = restaurant.numGuests ? restaurant.numGuests : "No such value";
// console.log(guest);

// // Nullish values: null and undefined (NOT: 0 or " ")
// const guest2 = restaurant.numGuests ?? 10;
// console.log(guest2);

// --------------------- CODING CHALLENGE ---------------------//
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],

//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // Task
// // Create one player array for each team (variables 'player1' and 'player2')
// const [t1Arr, t2Arr] = game.players;

// // The first player in any player array is the goalkeeper and the others are field players.
// // For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and
// // one array ('fieldPlayers') with all the remaining 10 field players.
// const [t1Gk, ...t1FieldPlayers] = t1Arr;

// // Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...game.players[0], ...game.players[1]];

// // During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// // new array ('player1Final') containing all the original team1 players plus "Thiago",
// // "Countinho", "Perisic".
// const newT1Arr = [...t1Arr, "Thiago", "Countinho", "Perisic"];

// // Based on the game.odds object, create one variable for each odd (called team1, draw, team2)
// const { team1, x: draw, team2 } = game.odds;

// // Write a function ('printGoals') that recieves an arbitrary number of player names(not an array)
// // and print them to the console, along with number of goals that were scored in total (number of player passed in)
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
// // printGoals("Davies", "Muller", "Kimmich");
// printGoals(...game.scored);
// The team with the lower odd is more likely to win Print to the console which team
// is more likely to win, without using the if/else statement or ternary
//team1 < team2 && console.log("Team 2 is likely to win!");

// For-of-loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
