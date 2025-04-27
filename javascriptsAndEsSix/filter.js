// filter selects elements based on a condition and returns and array with the elements that fulfilled the condition.

// so we can say that filter() is a method you can use on arrays to create a new array containing only the elements that pass a certain condition.

const numbers = [1, 2, 54, 6, 6, 3, 6];

const players = [55, 56, 76, 66, 67, 78];

const result = players.filter((age) => age > 65);
const result1 = players.filter(function (element, index, array) {
  console.log(`Element ${element} Index ${index} and arr ${array}`);
  return element > 50;
});
console.log(result1);

const result2 = numbers.find((num) => num > 2);
console.log(result2);
