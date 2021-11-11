const arr = ['타노스' , '아이언맨' , '블랙위도우']


console.log(arr.length)

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
// undefinend 는 변수는 잇는데 아직 사용하지 않았다라는 뜻이고
// not defined 는 변수조차 없다는 소리이다

arr[3] = "블랙팬서"
// arr[3] = "캡틴아메리카"
// arr[3] = "블랙팬서"

const changedLength = arr.push("팔콘") //push 하면 변경된 길이에 대 길이를 알려준다
console.log(changedLength)
console.log(arr[3])

//console.log(arr.indexOf('캡틴아메리카'))

console.log(arr)

arr.splice(1,1) // 인덱스 1 부터 몇개를 지울것인가 ?
console.log(arr)

for (let i = 0; i < arr.length; i++) {
    if(arr[i] === '블랙위도우'){
        continue
    }
    console.log(i)
    console.log(arr[i])

}

console.log("----------------------------")





