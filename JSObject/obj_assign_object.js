let student = {
  id: "20230001",
  name: "한공대",
};
// 객체 분할 대입
let { id, name } = student;
let msg = `id는 ${id}, name은 ${name}`;
console.log(msg);
