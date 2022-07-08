// console.log(global);

setTimeout(() => {
    console.log("timeout good boy")
    clearInterval(int)
}, 3000)

const int = setInterval(() => {
    console.log("interval bad boy")
}, 1000)

console.log(int)