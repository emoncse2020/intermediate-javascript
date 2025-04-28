function sum(a, b, c) {
  // argument is array like objects

  console.log(typeof arguments);

  //   converting arguments into array

  const args = [...arguments];
  console.log(args);
  const result = a + b + c;
  return result;
}

const total = sum(45, 89, 12, 45, 654, 334);
console.log(sum.length);
console.log(total);
