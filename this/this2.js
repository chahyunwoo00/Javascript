//함수문맥에서 this
function main(){
  console.log(this)
}

main()

//main함수를 정의하면 window.main에 등록되어서 
//결국엔 window.main이되므로 함수를 호출한 객체가 window가 되어서 window객체 출력
