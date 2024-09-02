function getData(){
  const promise =new Promise((resolve,reject)=>{
    console.log(1)
    resolve('success')
    console.log(2)
  })
  return promise
}
const data=getData()
console.log(data)
console.log(3)

//전부다 동기적으로 수행되는 예시