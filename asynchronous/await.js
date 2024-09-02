function networkRequest(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      console.log('데이터를 받아왔습니다')
      resolve('서버1')        //resove하지않으면 계속 pending상태이므로 await에 머물게 됨
    },2000)
  })
}

async function getUser(){
  const result=await networkRequest() //await뒤에는 promise를 반환하는 것이 나와야함 
  console.log(result)                  //example4.js
  return '별코딩'                         
}

const user=getUser()
user.then((name)=>{console.log(name)})

console.log(1)//async함수를 호출하면 await를 만나기전까지는 동기적으로 수행되고 await를 만나게 되면 함수를 일시정지하고 다음 코드를 순차적으로 실행함
console.log(2)
//await의 원리:await작업이 완료가 되면 그 밑의 코드는 마이크로 스택에 추가되고,메인스레드가 모두 실행된후에 마이크로 스택에 있는게 순차적으로 실행됨

// await가 만나는 Promise가 즉시 fulfilled 상태로 변해도
//, async 함수의 await 아래의 코드는 동기 코드가 모두 실행된 후 실행됩니다.
