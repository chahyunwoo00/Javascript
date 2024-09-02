function getData(){
  setTimeout(()=>{
    console.log(4)
  },3000)
  setTimeout(()=>{
    console.log(3)
  },2500)
  
  console.log(1)
}

getData()
console.log(2)
