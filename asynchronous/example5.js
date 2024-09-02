//await가 진행중일때의 async함수의 반환값을 출력하면 pending이네

function networkRequest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('데이터를 받아왔습니다');
      resolve('네트워크 결과');
    }, 2000); // 즉시 fulfilled 상태로 만듭니다
  });
}

async function getUser() {
  console.log('1. 시작');
  const result = await networkRequest(); // 비동기적으로 대기
  console.log('2. 결과:', result); // 'undefined'가 출력됩니다
  return '별코딩'; // '별코딩'이 반환됩니다
}

console.log('A. 호출 전');
const user = getUser(); // getUser 호출, 반환된 Promise를 user에 저장
console.log(user)