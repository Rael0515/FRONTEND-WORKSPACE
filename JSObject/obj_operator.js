let user = {
  name: "John",
  age: 30,
  hobby: "coding",
};

console.log("hobby" in user);

for (let prop in user) {
  console.log(prop);
}
