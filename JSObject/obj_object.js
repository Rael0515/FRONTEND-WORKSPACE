let myCar = new Object();
myCar.Model = "520d";
myCar.speed = 60;
myCar.color = "red";
myCar.brake = function () {
  this.speed -= 10;
};
myCar.accel = function () {
  this.speed += 10;
};

myCar.color = "yellow";
myCar.brake();

console.log(myCar);
