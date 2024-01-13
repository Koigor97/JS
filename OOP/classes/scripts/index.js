"use strict";

// working with classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// create an instance of Person
const person1 = new Person("John", 30);
person1.greet();
console.log(person1);
console.log("----------------------------------");

// create a subclass of Person
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    console.log(`${this.name} owes $${this.balance}.`);
  }
}

// create an instance of Customer
const customer1 = new Customer("Kevin", 32, 300);
console.log(customer1);
customer1.greet();
customer1.info();
console.log("----------------------------------");

// impemeting polymorphism
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

const animal1 = new Animal("Cocaan parrot");
animal1.speak();

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog1 = new Dog("Rex");
dog1.speak();
console.log("----------------------------------");

// using static class, properties, and methods
class StaticClass {
  static staticProperty = "static property";
  static staticMethod() {
    console.log("static method");
  }
}

console.log(StaticClass.staticProperty);
StaticClass.staticMethod();
console.log("----------------------------------");

// manually defining the this keyword using bind(), call(), and apply()
const person = {
  name: "John",
  age: 30,
};

const person2 = {
  name: "Sara",
  age: 25,
};

function greet(method) {
  console.log(
    `Hello, my name is ${this.name} and I am ${this.age} years old. - The ${method} method was used to call this function.`
  );
}

function greet2(city, country, method) {
  console.log(
    `Hello, my name is ${this.name} and I am ${this.age} years old. I live in ${city}, ${country}. - The ${method} method was used to call this function.`
  );
}

function favQuote(method) {
  console.log(
    `My favorite quote is: "${this.quote}" - The ${method} method was used to call this function.`
  );
}

person.quote = "Be yourself; everyone else is already taken.";
person2.quote =
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.";

greet.call(person, "call()");
greet.call(person2, "call()");

greet2.call(person, "Miami", "USA", "call()");
greet2.call(person2, "London", "UK", "call()");

greet.apply(person, ["apply()"]);
greet.apply(person2, ["apply()"]);

greet2.apply(person, ["Miami", "USA", "apply()"]);
greet2.apply(person2, ["London", "UK", "apply()"]);

const greetPerson = greet.bind(person, "bind()");
greetPerson();
const greetPerson2 = greet2.bind(person, "Miami", "USA", "bind()");
greetPerson2();
console.log("----------------------------------");

// using getters and setters
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get personInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }

  set personInfo(value) {
    const parts = value.split(", ");
    this.name = parts[0];
    this.age = parts[1];
  }
}

const person3 = new Person2("John", 30);
console.log(person3.personInfo);
person3.personInfo = "Sara, 25";
console.log(person3.personInfo);

// using private properties and methods
class Person3 {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  get personInfo() {
    return `Name: ${this.#name}, Age: ${this.#age}`;
  }

  set personInfo(value) {
    const parts = value.split(", ");
    this.#name = parts[0];
    this.#age = parts[1];
  }
}

const person4 = new Person3("John", 30);
console.log(person4.personInfo);
person4.personInfo = "Sara, 25";
console.log(person4.personInfo);
console.log("----------------------------------");

// flags and descriptors
const person5 = {
  name: "John",
  age: 30,
};

const person6 = {
  name: "Sara",
  age: 25,
};

Object.defineProperty(person5, "name", {
  writable: true,
  enumerable: false,
  configurable: false,
});

Object.defineProperty(person5, "age", {
  enumerable: false,
  configurable: false,
  value: 30,
  writable: false,
});

person5.name = "Kevin";
console.log(person5.name);

// person5.age = 32;
// console.log(person5.age);

const descriptor = Object.getOwnPropertyDescriptors(person5);
console.log(descriptor);

// freezing and sealing objects
const person8 = {
  name: "John",
  age: 30,
};

Object.seal(person8);
person8.name = "Kevin";
console.log(person8);

const person7 = {
  name: "John",
  age: 30,
};

Object.freeze(person7);
person7.name = "Kevin";
console.log(person7);
