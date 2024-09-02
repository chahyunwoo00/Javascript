//Fetch API

async function fetchData(){
  const response=await fetch('https://jsonplaceholder.typicode.com/users')
  const data=await response.json()
  console.log(response)
}

fetchData()

//json메소드도 promise를 반환
//json() 메소드는 서버로부터 받은 JSON 형식의 응답을 JavaScript 객체로 변환해 주는 역할을 합니다.