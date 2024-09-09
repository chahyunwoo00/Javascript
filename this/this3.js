//객체 메서드에서 this
const object={
  name:'별코딩',
  main:function(){
    console.log(1)
  },
}

object.main()
//main을 호출한게 object이기때문에 this는 object를 가리킴

const main2=object.main;
main2()//window객체 출력