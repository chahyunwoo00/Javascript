function main(){
  console.log(this)
}

const object={
  name:'별코딩',
  smallObject:{
    name:'작은 별코딩',
    main,//key와 value가 같을때 문법?
  },
}

object.smallObject.main()//smallObject출력