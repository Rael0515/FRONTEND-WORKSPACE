let arr = [1, 2, 3, 4, 5];

function map(func) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i], i, arr));
  }
  return result;
}
let result = map((item, i, array) => {
  return item * 2;
});
console.log(result);

function filter(func) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    func(arr[i], i, arr) ? result.push(arr[i]) : null;
  }
  return result;
}
result = filter((item, i, array) => item % 2 === 0);
console.log(result);
