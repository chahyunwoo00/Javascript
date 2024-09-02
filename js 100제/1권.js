splice,concat

//1번
var nums=[100,200,300,400,500]
nums.pop();
nums.pop()

console.log(nums)

//2번
var arr=[200,100,300]
arr.splice(2,0,10000)
console.log(arr)

//3번
undefined, string, number 는 모두 기본 자료형(primitive type) 입니다.
arr은 object입니다

//4번

//5번

//6qjs
avaScript 에서는 null, undefined, 0, 빈 문자열, NaN,
 false 를 제외하고는 모두 참인 값으로 평가합니다.
 //7번
 3,5
 //8번
 //9번
 concat함수
 //10번 x
 계산문제
//11번 o
//12번
class Wizard {
  constructor(health, mana, armor) {
      this.health = health;
      this.mana = mana;
      this.armor = armor;
  }
  attack() {
      console.log('파이어볼');
  }
};

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor); // 545 210 10
x.attack(); // 파이어볼

//13 x
vscode에서 code runner로 js돌리면 Node.js로 됨
문자열인 숫자랑 숫자형이랑 산술연산하면 문자열이 숫자로 되면서 암묵전 변환

요약
덧셈 연산 (+): 피연산자 중 하나가 문자열이면 문자열 결합을 수행합니다. 이 경우 숫자도 문자열로 변환됩니다.
뺄셈 연산 (-): 피연산자를 숫자로 변환한 후 빼기 연산을 수행합니다. 이 경우 문자열이 숫자로 변환될 수 있다면 숫자로 변환됩니다.
이 차이는 자바스크립트의 동적 타입 변환 규칙에서 비롯된 것입니다. 덧셈 연산은 문자열 결합을 우선시하고, 뺄셈 연산은 숫자 연산을 우선시합니다.

//14 
몫 /
나머지 %

//15
* es6부터는 backtick 문자열(``) 안에서 $와 중괄호로 표현식을 사용할 수 있습니다. 
* 이를 템플릿 리터럴(Template literals)이라 합니다.

//16
split메서드는 문자열을 배열로
reverse는 배열의 순서를 반전
join은 배열을 문자열로

//17 o

//18
정적 객체vs 인스턴스 객체
함수vs메소드
Math.floor() 내림
Math.ceil() 올림
Math.round() 반올림
parseInt()
//19
Math.pow(base, exponent) --거듭게곱
//20
parseInt 유용하게 쓰자
//21
Set 클래스는 ES6(ECMAScript 2015)에서 도입되었으며, 
다른 객체 지향 프로그래밍 언어의 클래스와 유사하게 작동합니다.
Set 생성자는 반복 가능한(iterable) 객체를 인수로 받을 수 있습니다.
//22 o
//23 o
//24 
toUpperCase():소문자를 대문자로 바꿔주는 메소드
//25
함수 매개변수는 let, var, const와 같은 키워드 없이 선언되며, 
이는 JavaScript 언어의 설계 철학에 따른 것입니다.
//26
딕셔너리
//27
딕셔너리 추가
//28 o
//29 
toUpperCase()
toLowerCase()
//30
* indexOf() 메서드는 호출한 스트링 객체나 배열에서 
 * 주어진 값과 일치하는 값 혹은 요소의 첫 번째 인덱스를 반환하고 
 * 존재하지 않으면 -1을 반환합니다.
//31
시간복잡도 문제
include메소드

indexOf는 값의 위치를 찾고 싶을 때 사용됩니다.
includes는 값이 포함되어 있는지 여부를 확인하고 싶을 때 사용됩니다.

//32 x
//33
문자열은 뒤바꾸는 메소드가 없음

문자열 뒤집기 단계
문자열을 배열로 변환 (split 메서드 사용)
배열의 순서를 뒤집기 (reverse 메서드 사용)
배열을 다시 문자열로 변환 (join 메서드 사용)

문자열: 불변(immutable) - 메서드를 사용해도 원본 문자열은 변경되지 않고, 새로운 문자열을 반환합니다.
배열: 가변(mutable) - 일부 메서드는 원본 배열을 변경하고, 일부 메서드는 원본 배열을 변경하지 않습니다.
객체: 가변(mutable) - 객체의 프로퍼티를 변경하면 원본 객체가 변경됩니다.
//34
sort메소드 깊게 공부하기
비교함수이용?복사본 만들기?
//35
Factory함수 보류
//36 x
//37
계산문제
//38







 
