let funcA = function (b) {
  b.a = 5;
};

let x = { a: 1 };
funcA(x);
console.log(x);

let funcB = (b) => {
  b = b.a = 5;
  b.b = 7;
};

let y = { c: 9 };

funcB(y);
console.log(y);
