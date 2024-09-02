function getData(){
  const promise =new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const data={name:'철수'}
      //const data=null
      if (data){
       // console.log('네트워크 요청 성공')
        resolve(data)
      }else{
        reject(new Error('네트워크 문제!!'))
      }
    },1000)
  })
  return promise
}

const data=getData()
console.log(data)
setTimeout(()=>{
  console.log(data)
},2000)

//상태변화 전후를 출력하는 코드