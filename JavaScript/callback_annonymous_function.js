function mainFunc(callback) {
  for (let i = 0; i < 3; i++) {
    callback(i);
  }
}
mainFunc(function (i) {
  console.log(`${i}번째 함수 호출`);
});
