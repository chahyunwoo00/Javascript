const object={
  name:'별코딩',
  main:function(){
    console.log(this)
  }.bind({name:'멋진 객체'})
}

object.main();
//bind는 인자를 this객체로 고정해서 새로운 함수를 반환
//근데 또 전통적인 함수랑 화살표 함수에서 this의 사용이 다르다고 함



// function main(){
//   console.log(this)
// }
// const mainBind=main.bind({name:'hi'})

// const object={
//   mainBind,
// }

// object.mainBind()