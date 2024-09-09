//가변인자=>인자의 갯수가  정해지지않았을때 유용
function main(){
  console.log(arguments)
}
main(1,2,3)


const main=(...args)=>{
  console.log(args)
}
main(1,2,3)