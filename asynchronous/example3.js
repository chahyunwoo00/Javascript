function networkRequest(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      console.log('데이터를 받아왔습니다')
      resolve()
    },2000)
  })
}

async function getUser(){
  const data=networkRequest() //즉시 반환은 되네!!
  //console.log(data)
  return data
}

const user=getUser()
console.log(user)
setTimeout(()=>{
  console.log(user)
},3000)