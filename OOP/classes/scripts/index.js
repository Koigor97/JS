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
