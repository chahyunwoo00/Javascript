const todayDiv=document.getElementById('today')
const timeDiv=document.getElementById('time')

//todayDiv.textContent='나는 날짜'//textContent메소드는 텍스트 설정
//timeDiv.textContent='나는 시간'

function getTime(){
  let now=new Date()//생성자 함수
  timeDiv.textContent=now
  let year=now.getFullYear()
  let month=now.getMonth()+1
  let date=now.getDate()
  let hour=now.getHours()
  let minute=now.getMinutes()
  let second=now.getSeconds()

  month=month<10? `0${month}` :month
  date=date<10? `0${date}` :date
  hour=hour<10? `0${hour}` :hour
  minute=minute<10? `0${minute}` :minute
  second=second<10? `0${second}` :second

  todayDiv.textContent=`${year}년 ${month}월 ${date}일`
  timeDiv.textContent=`${hour}시 ${minute}분 ${second}초`


}
getTime()
setInterval(getTime,1000)//setInterval도 비동기
