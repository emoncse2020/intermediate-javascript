function add(num1, num2) {
  return num1 + num2;
}

const res = add(5, 3);
console.log(res);

// function expression
const add2 = function (num1, num2) {
  return num1 + num2;
};

const result = add2(12, 23);
console.log(result);

// arrow function
const add3 = (num1, num2) => num1 + num2;

const result3 = add3(1, 4);
console.log(result3);

const task = (a, b = 2) => a + b;

const tres = task(5);
console.log(tres);

// task 2:

const friends = ["tasnim", "maisha", "imoon", "khan"];

// const evenFrineds = [];

const checking = (counts) => {
  const newArray = [];
  for (const count of counts) {
    if (count.length % 2 === 0) {
      newArray.push(count);
    }
  }
  return newArray;
};

const resArray = checking(friends);

for (const element of resArray) {
  console.log(element);
}
