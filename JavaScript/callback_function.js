function manuFunc(callback) {
  console.log("main Function");
  callback();
}

function subFunc() {
  console.log("sub Function");
}

mainFunc(subFunc);
