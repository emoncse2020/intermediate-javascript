function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const myFunc = outer();
myFunc();
myFunc();
myFunc();
