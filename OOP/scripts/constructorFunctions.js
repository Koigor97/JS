"use strict";

function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;

  this.getArea = function () {
    return this.width * this.height;
  };
}

const rectangle = new Rectangle("rectangle 1", 10, 20);
console.log(rectangle);
console.log(rectangle.getArea());

const rectangle2 = new Rectangle("rectangle 2", 30, 20);
console.log(rectangle2);
console.log(rectangle2.getArea());

//  getting the constructor function of an object
console.log(rectangle.constructor);

//  getting the prototype of an object
console.log(rectangle.__proto__);

// getting the instance of an object
console.log(rectangle2 instanceof Rectangle);
