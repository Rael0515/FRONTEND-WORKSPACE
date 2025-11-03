//배열에서 map()사용

let fruits = ["Apple", "Banana", "Orange"];

let modifiedfruits = fruits.map(function (item, index) {
  return `${index}: ${item}`;
});

console.log(modifiedfruits);

//객체 배열에서 map()사용
const students = [
  { id: "90000000", name: "한공대" },
  { id: "20230002", name: "인공지능" },
  { id: "20230003", name: "컴퓨터" },
  { id: "20230004", name: "소프트웨어" },
];

let modifiedStudents = students.map(function (item, index) {
  return `${index}: 학번(${item.id}), 이름(${item.name})`;
});
console.log(modifiedfruits);
