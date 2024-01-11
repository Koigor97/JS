"use strict";
const rectangle = {
  name: "rectangle 1",
  width: 10,
  height: 20,

  getArea: function () {
    return this.width * this.height;
  },
};

console.log(rectangle.name);
console.log(rectangle.getArea());

const rectangle2 = {
  name: "rectangle 2",
  width: 30,
  height: 20,

  getArea: function () {
    return this.width * this.height;
  },
};

console.log(rectangle2.name);
console.log(rectangle2.getArea());
