let multiArray = [];
for (let i = 0; i < 3; i++) {
  multiArray[i] = [];
  for (let j = 0; j < 3; j++) {
    multiArray[i][j] = i + j;
  }
}
console.log(multiArray);

multiArray[1].push(7);
console.log(multiArray);

multiArray.pop();
console.log(multiArray);
multiArray[1].shift();
console.log(multiArray);
