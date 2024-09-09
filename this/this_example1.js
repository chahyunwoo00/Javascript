const object={
  name:'별코딩',
  main:function(){
    const innerFunction=function(){
      console.log(this)
    }
    innerFunction()
  }
}
object.main()//window

const object2={
  name:'별코딩',
  main:function(){
    const innerFunction=()=>{
      console.log(this)
    }
    innerFunction()
  }
}
object2.main()//object2


