// function networkRequest() {
//   return new Promise((resolve,reject) => {
//     reject(); 
//   });
// }

// async function getUser() {
//   const result = await networkRequest();
//   console.log(2)
//   return '별코딩'; 

// const user = getUser(); 
// console.log(1)}

//위의 코드는 오류가 생김 그래서 해결방법 try-catch문을 사용(promise chaining의 then,catch 메소드랑 비슷)

function networkRequest(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve()
    },2000)
  })
}

async function getUser(){
  throw new Error('에러가 발생했어요')
  await networkRequest()
  return '별코딩'
}

async function getTodo(){
  await networkRequest()
  return ['청소하기','밥먹기']
}

async function getData(){
  let user
  try{
    user=await getUser()
  } catch(error){
    console.log(error.message)
    user='익명'
  }
  const todo=await getTodo()
  console.log(`${user}님 ${todo}를 하세요`)
}

getData()