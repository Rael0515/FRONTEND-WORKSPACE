function Vehicle(make, model) {
  this.make = make;
  this.model = model;
}
Vehicle.prototype.getDetails = function () {
  return `${this.make}${this.model}`;
};
Vehicle.prototype.getDetails = function () {
  return `${this.make}${this.model}, drive()`;
};
function Car(make, model, doors) {
  Vehicle.call(this, make, model);
  this.doors = doors;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.getDetails = function () {
  return `${this.make}${this.model}${this.doors}doors`;
};
const car = new Car("benz", "E300", 4);
console.log(car.getDetails());
console.log(car.drive());
