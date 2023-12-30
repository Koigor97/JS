"use strict";

const courses = [
  "Web Frontend 1",
  "Web Frontend 2",
  "Programming with Classes",
  "Programming with Function",
  "Intro to Humanities",
  "JavaScript",
  "Web Fundamentals",
];

// Using the forEach() Array Method
courses.forEach((item, index, arr) => {
  //   console.log(`Index ${index + 1}: Course - ${item} from the Courses array`);
});

// On a array of Object
const socialLinkObjs = [
  { name: "GitHub", url: "https://www.github.com" },
  { name: "X", url: "https://www.twitter.com" },
  { name: "Facebook", url: "https://www.facebook.com" },
  { name: "LinkedIn", url: "https://www.linkedin.com" },
  { name: "Instagram", url: "https://www.instagram.com" },
];

socialLinkObjs.forEach((link) => {
  //   console.log(`The URL for ${link.name} is : ${link.url}`);
});

// Using the filter() Higher Order Array Method
const names = [
  "Abdul",
  "John",
  "Samuel",
  "Messi",
  "Bryan",
  "Proff",
  "Rimzo",
  "Fred",
  "Zainab",
  "Lucy",
  "Eyethu",
  "Simone",
];

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const financeStaffs = names.filter((name) => {
  if (name.toLowerCase().includes("a" && "u")) {
    return name;
  }
});
// console.log(financeStaffs);

// the map() Higher order function
const financeDepartment = companies.map((element) => {
  if (element.category.includes("Finance")) {
    return [{ ...element, staffs: financeStaffs }];
  }
});
// console.log(financeDepartment);
////////////////////////////////////////////////////

// Use the reduce() Higher order method
const numbers = [1, 14, 23, 10, 5, 0.5, 8, 22, 50, 43];

const sum = numbers.reduce((acc, cur) => cur * acc, 0);
console.log(sum);
