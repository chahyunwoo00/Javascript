//await를 만난 promise가 바로 fulfill상태가 된다고 하더라도 그 밑의 함수는 완료되면
//마이크로태스크큐에 쌓이게 되고 메인스레드가 다 실행된후에 실행된다
//단지 마이크로태스크 큐에 쌓이는게 즉시 되는거일뿐..(비동기)

function networkRequest() {
  return new Promise((resolve) => {
    resolve(); // 즉시 fulfilled 상태로 만듭니다
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
user.then((name) => { console.log('C. 데이터:', name); }); // '별코딩'이 출력됩니다

console.log('B. 호출 후');
