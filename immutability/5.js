//5.가변과 불변 api비교
var score=[1,2,3]
var a=score
var b=score
//score.push(4) 원본을 수정
var score2=score.concat(4)//원본 복사
console.log(score,score2,a,b)

// JavaScript에서 concat() 메서드는 두 개 이상의 배열을 
// 하나의 배열로 합치는 데 사용됩니다
//  이 메서드는 기존 배열을 변경하지 않고,
//  새로운 배열을 반환합니다.