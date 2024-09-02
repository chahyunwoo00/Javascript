// async function getUSer(){
//   console.log(1)
//   return '별코딩'
// }
// console.log(2)
// const user=getUSer()
// console.log(user)

async function getData() {
  console.log('1. 시작');
  return '별코딩';
}

console.log('A. 호출 전');
const dataPromise = getData(); 
console.log(dataPromise)
console.log('B. 호출 후');

dataPromise.then(data => {
  console.log('3. 데이터:', data);
});

//--> 내 생각
//함수 호출이랑 async 내부 함수 수행이랑 return까지 동기 
//근데 그 이후에 반환된 promise가 then메소드로 이어지는건 비동기
