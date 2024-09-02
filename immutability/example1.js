let a = 10;
let b = a;
b = 20;

console.log(a); // 10 (원시 값은 독립적)

let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";

console.log(obj1.name); // "Bob" (객체는 참조로 연결)

//원시타입은 값 자체 할당
//객체타입은 참조가 할당

//원시 타입은 immutable
//객체 타입은 mutable