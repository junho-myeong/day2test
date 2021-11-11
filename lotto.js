const lotto = []

console.log(lotto)




// unreachable statement
// while(true) {
//
// }


while(true) {

//    숫자를 생성 1-45사이의 숫자
    const num = parseInt(Math.random()*45) +1

//    검사 하는 단계
    const index = lotto.indexOf(num)
    console.log(index)
    console.log(num)
//    있었다
    if(index >= 0) {
        continue
    }
    const newLength = lotto.push(num)
    if(newLength === 6){
        break
    }
}

console.log(lotto)
