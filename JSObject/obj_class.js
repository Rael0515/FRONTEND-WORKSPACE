class Car {
  constructor(model, speed, color) {
    this.model = model;
    this.speed = speed;
    this.color = color;
  }
  brake() {
    this.speed -= 10;
  }
  accel() {
    this.speed += 10;
  }
}
let myCar = new Car("520d", 60, "white");
myCar.color = "yellow";
myCar.brake();

console.log(myCar);
