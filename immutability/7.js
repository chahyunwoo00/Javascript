//7. const vs object freeze
const o1={name:'kim'}
Object.freeze(o1)
const o2={name:'lee'}
//o1=o2  const o1에 걸림
o1.name='park' //onject freeze에 걸림
console.log(o1)