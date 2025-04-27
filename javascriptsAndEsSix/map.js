//  map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array

const numbers = [2, 4, 5, 6, 10];

function doubleIt(num) {
  return num * 2;
}

const result = numbers.map(doubleIt);

console.log(result);
