const object={
  name:'별코딩',
  main:function(){
    console.log(this)
  },
  mainArrow:()=>{
    console.log(this)
  }
}
object.mainArrow()//window

//일반 함수는 호출방법에 따라
//화살표 함수는 정의된 스코프에 따라