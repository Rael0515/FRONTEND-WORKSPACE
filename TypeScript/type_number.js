function sum(a, b) {
    return a + b;
}
console.log(sum(123, 4));
var isUsed = true;
var fruit = "Apple";
var num = 100;
num = 3.14;
var nullable = null;
var undefinedable = undefined;
function addNumber(x, y) {
    return x + y;
}
var num1 = 5;
var num2 = 2.5;
var result = addNumber(num1, num2);
console.log(result);
var week;
(function (week) {
    week[week["sun"] = 0] = "sun";
    week[week["mon"] = 1] = "mon";
    week[week["tue"] = 2] = "tue";
    week[week["wed"] = 3] = "wed";
    week[week["thu"] = 4] = "thu";
    week[week["fri"] = 5] = "fri";
    week[week["sat"] = 6] = "sat";
})(week || (week = {}));
var day = week.mon;
//let day: week = week[1];
var student;
student = {
    name: "kildong",
    age: 25,
};
console.log("오늘의 요일은? : ", day);
console.log(student);
