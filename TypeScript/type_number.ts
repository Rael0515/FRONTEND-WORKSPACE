function sum(a: number, b: number) {
  return a + b;
}
console.log(sum(123, 4));

let isUsed: boolean = true;
let fruit: string = "Apple";
let num: number = 100;
num = 3.14;
let nullable: null = null;
let undefinedable: undefined = undefined;

function addNumber(x: number, y: number): number {
  return x + y;
}

let num1: number = 5;
let num2: number = 2.5;
let result: number = addNumber(num1, num2);

console.log(result);

enum week {
  sun,
  mon,
  tue,
  wed,
  thu,
  fri,
  sat,
}
let day: week = week.mon;
//let day: week = week[1];

let student: { name: string; age: number };
student = {
  name: "kildong",
  age: 25,
};

console.log("오늘의 요일은? : ", day);
console.log(student);

let my_id: string | number = "lion";
my_id = 2015344;
// let my_id: Array<string | number > = ['mina', 'tiger', 20251234];
console.log("id:", my_id);
interface Student {
id: number;
name: string;
age: number;
}
let game: Student;
game = { id: 1, name: "홍길동", age: 25 };

interface Person{
    name: string;
    study(): void;
}

class Student implements Person{
    name: string;
    study() {
        console.log("No Pain No Gain");
    }
}

let myStd = new 