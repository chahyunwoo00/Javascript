//이벤트 처리기에서의 this

const button=document.getElementById('btn')

button.addEventListener('click',function(event){
  console.log(this)
  console.log(event.target===this)
})