//3. 얕은 복사 (Shallow Copy)
//얕은 복사를 수행하는 방법:
//Object.assign()
//스프레드 연산자 (...)
let original = { name: 'Alice', address: { city: 'Wonderland' } };
let copy = { ...original };  // 얕은 복사

copy.name = 'Bob';
copy.address.city = 'Paradise';

console.log(original.name);  // 'Alice'
console.log(original.address.city);  // 'Paradise'

//copy.address를 바꾸면 첫번째 레벨이라 원본과 충돌안하는데 
//copy.address.city는 두번째 레벨이라 원본과 충돌