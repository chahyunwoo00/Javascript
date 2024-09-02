//2. 참조 복사 (Reference Copy)
let obj1 = { name: 'Alice' };
let obj2 = obj1;  // obj2는 obj1이 참조하는 동일한 객체를 참조함

obj2.name = 'Bob';

console.log(obj1.name);  // 'Bob'
console.log(obj2.name);  // 'Bob'
