const object={
  name:'별코딩',
  main:function(){
    console.log(this)
  }
}

const object2={
  name:'다른 객체',
  main:object.main
}

object.main()//object
object2.main()//object2

//일반 함수는 호출방법에 따라
//화살표 함수는 정의된 스코프에 따라