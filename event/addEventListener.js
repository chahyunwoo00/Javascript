const bt1=document.getElementById('one')
const bt2=document.getElementById('two')
const bt3=document.getElementById('three')

const handleClick=(event)=>{
  console.log('click')
  console.log(event.target)
}

//이벤트 리스너 등록  
bt2.addEventListener('click',handleClick)

//또다른 이벤트리스너 등록
bt2.addEventListener('click',()=>{console.log('another click')})

//이벤트리스너 제거
bt2.removeEventListener('click',handleClick)

//이벤트 객체


//!이벤트리스너도 비동기 
// 사용자가 버튼을 클릭하면, 해당 이벤트 리스너에 연결된 콜백 함수가 콜백 큐에 들어갑니다.
// JavaScript 엔진은 현재 콜 스택의 모든 작업(동기 코드)이 완료되어 스택이 비어지면 이벤트 루프가 콜백 큐에 있는 첫 번째 콜백을 가져와 콜 스택에 넣어 실행합니다.
