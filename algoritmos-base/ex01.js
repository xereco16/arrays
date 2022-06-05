const {
    ler,
    escrever
} = require('./utils/utils');


let nums = [];

let res

for (let i = 0; i < 5; i++) {
    res = Number(ler('Digite um numero: '))
    nums.push(res)
}

console.log("os números escolhidos foram: "+nums)