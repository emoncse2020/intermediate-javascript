let x = 5;
let y = 7;
x = y;
y = 9;
console.log(x, y);

const p = {
  job: "web developer",
};

let q = p;

q.job = "backend developer";
console.log(p, q);
