"use strict";

const Person = function (firstName, birthYear) {
  // Instance properties

  this.firstName = firstName;
  this.birthYear = birthYear;
  //   never try to do this(do not create method inside of a constructor function )
  //   this.calcAge = function () {
  //     console.log(2027 - this.birthYear);
  //   };
};

const jonas = new Person("Jonas", 1991);
// console.log(jonas);

// console.log(jonas instanceof Person);

// console.log(Person.prototype);
// Prototypes:

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
// console.log(Person.prototype);

// console.log(jonas.calcAge());

// console.log(jonas.__proto__);

Person.prototype.species = "Homo Sapiens";

// console.log(jonas.species);
// console.log(jonas);

// console.log(jonas.hasOwnProperty("species"));
// console.log(jonas.hasOwnProperty("firstName"));

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);
console.log(Person.prototype.constructor);

const array = [1, 2, 4, 5, 3, 5, 56];

console.log(array.__proto__);
console.log(array.__proto__ === Array.prototype);
