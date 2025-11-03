function Car(model, speed, color) {
  this.model = model;
  this.speed = speed;
  this.color = color;

  this.brake = function () {
    this.speed -= 10;
  };
  this.accel = function () {
    this.speed += 10;
  };
}

let myCar = new Car("520d", 60, "white");
myCar.color = "yellow";
myCar.brake();

console.log(myCar);
