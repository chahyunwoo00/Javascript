//object freeze로 객체를 불변하게 만들기
var o1={name:'kim',score:[1,2]}
Object.freeze(o1)
Object.freeze(o1.score)//속성이 객체면 따로 또 해줘야함
o1.name='lee'
o1.city='seoul'
o1.score.push(3)
console.log(o1)

//예방하는 메소드