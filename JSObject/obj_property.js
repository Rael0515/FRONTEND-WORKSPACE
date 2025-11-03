let user = {
  name: "John",
  age: 30,
  "like birds": true,
};

user.hobby = "codding";
user["sex"] = "male";
console.log(user);

delete user.age;
delete user["like birds"];
console.log(user);
