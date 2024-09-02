//4. 깊은 복사 (Deep Copy)
//깊은 복사를 수행하는 방법:
//재귀적 복사
//라이브러리 사용 (lodash의 _.cloneDeep)
//JSON 방법 (단, 함수, undefined, Symbol 등을 복사할 수 없음)
let original = { name: 'Alice', address: { city: 'Wonderland' } };
let deepCopy = JSON.parse(JSON.stringify(original));  // 깊은 복사

deepCopy.address.city = 'Paradise';

console.log(original.address.city);  // 'Wonder
