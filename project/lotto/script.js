const numbersDiv=document.querySelector('.numbers')
const drawButton=document.querySelector('#draw')
const resetButton=document.querySelector('#reset')

const lottoNumbers=[]
const colors=['red','orange','yellow','green','blue']

function paintNumber(number){
  const eachNumDiv=document.createElement('div')
  let colorIndex=Math.floor(number/10)
  eachNumDiv.classList.add('eachnum')
  eachNumDiv.style.backgroundColor=colors[colorIndex]
  eachNumDiv.textContent=number
  numbersDiv.appendChild(eachNumDiv)
}
//createElement랑 classList공부 후 다시
drawButton.addEventListener('click',function(){
   while(lottoNumbers.length<6){
    let ran =Math.floor(Math.random()*45)+1
    if(lottoNumbers.indexOf(ran)===-1){
      lottoNumbers.push(ran)
      paintNumber(ran)
      }
   }
})
resetButton.addEventListener('click',function(){
  lottoNumbers.splice(0,6)//몇번 인덱스부터 몇개 지우겠다
  numbersDiv.innerHTML=''
})
 
