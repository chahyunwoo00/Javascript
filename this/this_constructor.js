//생성자함수의 this

function Person(name) {
  this.name = name;
}

const person = new Person('Alice');
console.log(person.name); // "Alice"

//생성자 함수로 호출될 때: new 키워드를 사용해 생성자 함수를 호출하면, 
//this는 새로 생성된 객체를 가리킵니다.