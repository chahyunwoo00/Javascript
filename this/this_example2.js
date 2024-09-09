const object={
  name:'별코딩',
  main:function(){
    setTimeout(function(){
      console.log(this)
    },1000)
  }
}
object.main()//window

const object2={
  name:'별코딩',
  main:function(){
    setTimeout(()=>{
      console.log(this)
    },1000)
  }
}
object2.main()//object2