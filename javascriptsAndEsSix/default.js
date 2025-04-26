// default -> if value is not provided, take this as a default.

function add(num1, num2 = 0) {
  const result = num1 + num2;
  console.log(num1, num2, result);
  return result;
}

// const sum = add(5, 7);
// const sum1 = add(4);
// console.log(sum1);
// console.log(sum);

// const num2 = add();
// console.log(num2);

// const num3 = add(5);
// console.log(num3);

function fullName(firstName, lastName = "") {
  const fullName = firstName + " " + lastName;
  return fullName;
}

// for array we will try to default as empty array like a = []

function friends(numbs = []) {}

// for object default parameter like person = {}
