"use strict";

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.fullName = function () {
    return this.name + " " + this.age;
  };
}

// Object properties
const person = new Person("John", 25);
console.log(person.name);
console.log(person.age);

// Object methods
console.log(person.fullName());

// Object properties
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// create a new object
const person2 = new Person("Mary", 30);
console.log(person2.name);
console.log(person2.age);
console.log(person2.fullName());

// add a new property to the object
person2.hobbies = ["reading", "music"];
person2.catchPhrase = function () {
  return "Hello!";
};

// Delete a property
delete person2.age;
console.log(person2);

// check if a property exists
console.log("name" in person2);
console.log("age" in person2);

// check if a property is enumerable
console.log(person2.propertyIsEnumerable("name"));
console.log(person2.propertyIsEnumerable("hobbies"));

// check hasOwnProperty
console.log(person2.hasOwnProperty("name"));
console.log(person2.hasOwnProperty("hobbies"));

// check if an object is extensible
console.log(Object.isExtensible(person2));

// getOwnPropertyDescriptor
console.log(Object.getOwnPropertyDescriptor(person2, "name"));

// get keys
console.log(Object.keys(person2));

// get values
console.log(Object.values(person2));

// get entries
console.log(Object.entries(person2));
