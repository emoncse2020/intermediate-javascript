// The JavaScript spread operator (...) is used to expand elements of an iterable (like an array, string, or object) into individual elements. It's super handy for copying, merging or passing values

const arr1 = [1, 3, 6, 4];

const arr2 = [...arr1, 10, 12];
console.log(arr1);
console.log(arr2);

const arr3 = arr1;
arr3.push(200, 300);
console.log(arr1);
console.log(arr3);

const arr4 = [...arr3];

arr3.push(600);
console.log(arr4);
