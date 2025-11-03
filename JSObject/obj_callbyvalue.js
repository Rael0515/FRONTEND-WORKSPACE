const swap = (a, b) => {
  let tmp = a;
  a = b;
  b = tmp;
};

let x = 5;
let y = 100;

swap(x, y);
console.log(x, y);

let func = function (b) {
  b = b + 10;
};

x = 20;

func(x);
console.log(x);
