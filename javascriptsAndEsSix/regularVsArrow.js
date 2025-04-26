function add(a, b) {
  return a + b;
}

const add1 = (a, b) => a + b;

// this binding:
// Regular function have their own this context.

// Arrow functions do not have their own this; they inherit it from the enclosing scope;

// function Regular() {
//   console.log(this);
// }

// Regular();

// :Use ad methods

const obj = {
  count: 10,
  regular: function () {
    console.log(this.count);
  },
  arrow: () => {
    console.log(this.count);
  },
};

obj.arrow();
obj.regular();

// arguments Object

// Regular functions have an arguments object
// Arrow function do not have arguments object

function regular() {
  console.log(arguments);
}

const arrow = () => {
  console.log(arguments);
};

regular();
arrow();
