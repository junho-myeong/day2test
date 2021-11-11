const readlineSync = require('readline-sync');
const readline = require("readline-sync");
// 주어진 데이터 부터 생각
// 주어진 데이터의 변수가 하나인지 두개 인지 생각(ex 이름 번호)
const r1 = 10
const r2 = 20

//원의 넓이
const r1Area = Math.PI*(Math.pow(r1,2))
const r2Area = Math.PI*(Math.pow(r2,2))

// 원의 넓이의 차 결과값
let result = Math.abs(r2Area - r1Area)
result = result.toFixed(2)

// if 연산자 사용방법
// let result = Math.abs(r2Area - r1Area)
// if(result < 0 ) {
//     result = result*-1
// }

// 삼항연산자 사용방법
// result = result < 0 ? result*-1 : result

// `(벡틱) 을 사용하면 + 사용하지 않고 $ 표시로 바로 사용 가능하다.
console.log(`이도형의 넓이는 : ${result}`)





