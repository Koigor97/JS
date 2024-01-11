"use strict";

function Department(name, employees, office, officeFloor) {
  this.name = name;
  this.employees = ["John", "Mary", "Peter", "Jane"];
  this.office = {
    location: "London",
    address: "Baker Street",
  };
  this.officeFloor = {
    number: 5,
    area: 200,
  };
}

const department = new Department();
console.log(department);
// console.log(department.name);
// console.log(department.employees);
// console.log(department.office);

// store method in prototype
Department.prototype.getEmployees = function () {
  return this.employees;
};

Department.prototype.getOffice = function () {
  return this.office;
};

Department.prototype.getOfficeFloor = function () {
  return this.officeFloor;
};

Department.prototype.getOfficeFloorNumber = function () {
  return this.officeFloor.number;
};

console.log(department.getEmployees());
console.log(department.getOffice());
console.log(department.getOfficeFloor());
console.log(department.getOfficeFloorNumber());

console.log("------------------------------------------");

// Object.create()
const department2Prototypes = {
  getEmployees: function () {
    return this.employees;
  },
  getOffice: function () {
    return this.office;
  },
  getOfficeFloor: function () {
    return this.officeFloor;
  },
  getOfficeFloorNumber: function () {
    return this.officeFloor.number;
  },
};

function createDepartment(theName, employees, office, officeFloor) {
  const department = Object.create(department2Prototypes);
  department.tName = theName;
  department.employees = ["John", "Mary", "Peter", "Jane"];
  department.office = {
    location: "London",
    address: "Baker Street",
  };
  department.officeFloor = {
    number: 5,
    area: 200,
  };
  return department;
}

const department2 = createDepartment("IT");
console.log(department2);
console.log(department2.getEmployees());
console.log(department2.getOffice());
