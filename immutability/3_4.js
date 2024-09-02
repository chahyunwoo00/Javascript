//3.4중첩된 객체의 복사
//복사한 객체의 프로포티에 객체가 있을경우(배열도 객체)
var o1={name:'kim',score:[1,2]}
var o2=Object.assign({},o1)
o2.score=o2.score.concat()
o2.score.push(3)
console.log(o1,o2,o1===o2,o1.score===o2.score) 
