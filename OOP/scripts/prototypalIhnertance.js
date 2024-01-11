"use strict";

// prototypical inheritance call
// create a Shape constructor
function Shape(name) {
  this.name = name;
}

// add a function to call name of the shape and the Number of Sides to the Shape prototype
Shape.prototype.getNameAndNumberOfSides = function () {
  return `The name of the shape is ${this.name} and the number of sides is ${this.numberOfSides}`;
};

// create a fucntion called rectangle and inherit from Shape
function Rectangle(name, width, height, numberOfSides) {
  Shape.call(this, name);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);

const rectangle = new Rectangle("Rectangle", 5, 3, 4);
console.log(rectangle);
console.log(rectangle.getNameAndNumberOfSides());

// other shapes
function Circle(name, radius, numberOfSides) {
  Shape.call(this, name);
  this.radius = radius;

  this.getArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
  };
}

Circle.prototype = Object.create(Shape.prototype);

const circle = new Circle("Circle", 5, 0);
console.log(circle);
console.log(circle.getArea());
console.log(circle.getNameAndNumberOfSides());

function Triangle(name, base, height, numberOfSides) {
  Shape.call(this, name);
  this.base = base;
  this.height = height;

  this.getArea = function () {
    return (this.base * this.height) / 2;
  };
}

Triangle.prototype = Object.create(Shape.prototype);

const triangle = new Triangle("Triangle", 5, 3, 3);
console.log(triangle);
console.log(triangle.getArea());
console.log(triangle.getNameAndNumberOfSides());

// create a function called Square
function Square(name, width) {
  Rectangle.call(this, name, width, width);
}

const square = new Square("Square", 5);
console.log(square);
