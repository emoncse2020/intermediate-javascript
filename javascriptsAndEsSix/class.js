// // has some properties, method

// class Product {
//   // constructor(){

//   // }

//   country = "Bangladesh";

//   constructor(name) {
//     this.name = name;
//   }

//   speak(talk) {
//     console.log(`talking about ${talk}`);
//   }
// }

// const lenovo = new Product("levo");
// console.log(lenovo);

// lenovo.speak("hey you");

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  lecture() {
    console.log("Sir is teaching Math");
  }
}

const tapan = new Teacher("Tapon", "physics");
console.log(tapan);
