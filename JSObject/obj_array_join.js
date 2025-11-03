let fruits = ["Apple", "Banana", "Orange"];

let index = fruits.indexOf("banana");
console.log(index); //-1

indexd = fruits.indexOf("Banana");
console.log(index); //1

let str = fruits.join();
console.log(str); //애플,바나나,오랜지 영어로

str = fruits.join("");
console.log(str); //띄어쓰기 없이 출력

str = fruits.join("+");
console.log(str); // + 로 중간에 나오며 출력

delete fruits[1];
console.log(fruits); // [ 'Apple', <1 empty item>, 'Orange' ]
