function getData(){
  const promise =new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const data={name:'철수'}
      //const data=null
      if (data){
        console.log('네트워크 요청 성공')
        resolve(data)
      }else{
        reject(new Error('네트워크 문제!!'))
      }
    },1000)
  })
  return promise
}
//then(), catch(), finally()
getData()
  .then((data)=>{
    const name=data.name
    console.log(`${name}님 안녕하세요`)
  })
  .catch((error)=>{
    console.timeLog('멋지게 에러처리를 했어요')
  })
  .finally(()=>{
    console.log('마무리 작업')
  })




//Promise안에 인자는 생성자로써 execute 함수
//resolve랑 reject를 매개변수로 받음
//비동기 작업이 진행중일때 return을 만나면 pending 비동기 작업이 끝나면 바뀜
//then,catch,finally는 pending일때는 실행안됨
//Promise의 then,catch,finally메소드의 콜백함수는 '마이크로태스크 큐'이며 콜백 큐보다 우선순위가 높음
