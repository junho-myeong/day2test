// 철근 문제 1pt당 3.5달러 이고 가로 300 세로 200 인 창문틀에 넓이는 ?
// 자바로 따지면 require가 import이다
const readline = require("readline-sync");

// 주어진 데이터

console.log('가로의 길이는 ? cm')
const width = parseFloat(readline.prompt())
console.log('세로 길이는 ? cm')
const height = parseInt(readline.prompt())
console.log('feet당 가격은 ? $')
const valuePerFeet = parseInt(readline.prompt())


// 창문 => 가로*2 ,세로*2 필요한 샷시의 길이
const totalLength = (width*2) + (height*2)

// 길이(cm) = > pt
let totalFeet = Math.ceil( totalLength/ 30.48)
console.log(totalFeet)

//Math.round() 반올림
//Math.ceil() 올림
//floor() 내림

// 가격계산
const totalValue = totalFeet*valuePerFeet
console.log(`총 가격은 : ${totalValue} 달러입니다.`)

// prompt-sync 는 입렵 받을때 문자로 받는다
// 그치만 readline-sync 는 내가 입력 하는 데이터에 따라 알아서 캐치해준다.




