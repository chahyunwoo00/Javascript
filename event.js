const inputType=document.querySelector('#typing')
const inputClick=document.querySelector('#push')

const handleTyping=function(){
  console.log('타미핑 되고 있어요')
}
const handleClick=function(){
  console.log('클릭되고 있어요')
}

inputType.onkeydown=handleTyping
inputClick.onclick=handleClick

//익명함수로 변수할당
// inputType.onkeydown=function(){
//   console.log('타이핑 되고 있어요')
// }

//함수호출을 대입->잘못된 방식
//inputType.onkeydown=handleTyping()