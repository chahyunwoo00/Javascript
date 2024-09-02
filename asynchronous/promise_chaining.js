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

//Promise chaining
// const promise =getData()
// promise
//   .then((data)=>{
//     console.log(data)
//     return getData()
//   })
//   .then((data)=>{
//     console.log(data)
//     return getData()
//   })
//   .then((data)=>{
//     console.log(data)
//   })


const promise =getData()
promise
  .then((data)=>{
    console.log(data)
    return 'hello' //return값이 promise가 아니더라도 promise로 감싸져서 바로 resolve됨
  })
  .then((data)=>{
    console.log(data)
  })