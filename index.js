let original = { name: 'Alice', address: { city: 'Wonderland' } };
let copy = { ...original ,address: { city: 'Wonderland' }};  // 얕은 복사

copy.address.city=5
console.log(original)
console.log(copy)
//두번째인자는 덮어쓸 속성을 적음
//근데 얕은복사는 최상위 속성을 원본과 충돌이 안남