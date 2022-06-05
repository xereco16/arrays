const {
    ler,
    escrever
} = require('./utils/utils');


let nums = [];

let res

for (let i = 0; i < 10; i++) {
    res = Number(ler(": "))
    nums.unshift(res)
}

console.log("os numeros escolhidos foram: "+nums)
