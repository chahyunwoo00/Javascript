//예시 1: Promise 반환
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('데이터');
    }, 1000);
  });
}

async function getData() {
  const data = await fetchData(); // fetchData가 Promise를 반환하므로, await가 사용됨
  console.log(data); // 1초 후 '데이터' 출력
}

getData();

//예시 2: Promise가 아닌 값을 반환
async function getData() {
  const data = await '즉시 반환되는 값'; // 문자열이므로, await는 즉시 해당 값을 반환
  console.log(data); // '즉시 반환되는 값' 출력
}

getData();

await 뒤에는 일반적으로 Promise가 와야 비동기 작업이 완료될 때까지 대기할 수 있습니다.
하지만, Promise가 아닌 값이 오면 await는 그 값을 즉시 반환합니다.
 따라서 await는 꼭 Promise를 반환하는 표현식 뒤에만 사용할 필요는 없지만, 
 Promise가 아닌 값을 await하면 의미가 없다는 점을 알아두시면 됩니다.