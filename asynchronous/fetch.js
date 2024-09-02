//fetch는 promise를 return하는 비동기 함수

const data=fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>{
    return response.json()
  })
  .then((data)=>{
    console.log(data)
  })
  .catch((error)=>{
    console.log('에러가 발생했습니다')
  })
  .finally(()=>{
    console.log('마무리 작업')
  })
  
//  console.log(data)

//fetch함수 호출 자체는 동기,호출되는순간 pending상태로 promise반환됨
//네트워크 요청(비동기)
//네트워크 요청이 완료되면 Promise의 상태 변화(비동기)
//fetch 호출이 끝난 직후, then, catch, finally 메서드로 등록된 콜백 함수는 대기 중이며, Promise의 상태가 변경되면 마이크로태스크 큐에 추가됩니다.
//콜스택이 비어 있을 때, 마이크로태스크 큐에서 대기 중인 콜백 함수들이 실행됩니다.
