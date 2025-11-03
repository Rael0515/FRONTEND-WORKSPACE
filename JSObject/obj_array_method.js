let x = [5, 15, 25];
let y = [3, 13, 23];

let joined = x.concat(y);
console.log(joined);
joined.push(100);
console.log(joined); //100이 추가되서 출력

let item = joined.pop();
console.log(item); //100

item = joined.shift();
console.log(item); //5

joined.unshift(50);
console.log(joined); // 50 15 25 3 13 23

let newArray = joined.slice(3);
console.log(newArray); //3 13 23
joined.sort(function (a, b) {
  return b - a;
});
// b-a내림차순, a-b 오름차순
console.log(joined); // 50 25 23 15 13 3
let filtered = joined.filter(function (n) {
  return n < 15;
});
console.log(filtered); // 13 3
