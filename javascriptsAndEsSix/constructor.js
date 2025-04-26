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
console.log(jonas);
