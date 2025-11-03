let myCar = {
  model: "520d",
  speed: 60,
  color: "red",

  break: function () {
    this.speed -= 10;
  },
  accel: function () {
    this.speed += 10;
  },
};

myCar.color = "yellow";
myCar.break();

console.log(myCar);
