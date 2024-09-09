// let a={name:'cha',
//         arr:[0,1,2]}
// let b=a
// b.name='lee'
// b.arr[0]=3
// console.log(a)
// console.log(b)



// let a={name:'cha',
//           arr:[0,1,2]}
// let b={...a}
// b.name='lee'
// b.arr[0]=3
// console.log(a)
// console.log(b)



// let a={fun:()=>{console.log(1)}}
// let b=a
// b.fun=()=>{console.log(2)}
// a.fun()
// b.fun()




// let a={fun:()=>{console.log(1)}}
// let b={...a}
// b.fun=()=>{console.log(2)}
// a.fun()
// b.fun()



// let a={arr:[()=>{console.log(1)}]}
// let b={...a}
// b.arr[0]=()=>{console.log(2)}
// a.arr[0]()
// b.arr[0]()


// let a={arr:[()=>{console.log(1)}]}
// let b=a.arr[0]
// b=()=>{console.log(2)}
// a.arr[0]()


let a={fun:()=>{console.log(1)}}
let b=a.fun
b=()=>{console.log(2)}
a.fun()
b()
