// var: no reason to use var
// let: allow it to reassign
// const: do not allow it to reassign

const money = 25;

// money = 50; not possible to reassign

const rich = money + 25;

console.log(rich);

let count = 0;
count += 10;
console.log(count);

const numbers = [12, 23, 3, 534, 5, 4, 3];
numbers.push(22);

console.log(numbers);
