// 로또 만들기2

const arr = []

for (let i = 1; i <= 45; i++) {
    arr.push(i)
}
console.log(arr)


for (let i = 0; i <6 ; i++) {
    const idx = parseInt((Math.random()*arr.length+1))

    console.log(arr.splice(idx,1))
}