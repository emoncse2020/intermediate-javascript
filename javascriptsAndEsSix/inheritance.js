// class Vehicle {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   move() {
//     console.log("gari cholena colena colena");
//   }
// }

// class Bus extends Vehicle {
//   constructor(name, price, seat, ticketPrice) {
//     super(name, price);
//     this.seat = seat;
//     this.ticketPrice = ticketPrice;
//   }
// }

// class Truck extends Vehicle {
//   constructor(name, price, load) {
//     super(name, price);
//     this.load = load;
//   }
// }

// const tata = new Truck("tata", 1200, 100);
// console.log(tata);

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog("Rex");
myDog.eat(); // Rex is eating.
myDog.bark(); // Rex barks.
