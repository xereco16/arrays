const {
    ler,
    escrever
} = require('./utils/utils');


let nums = [];
let numArr
let maior = 0

let res

for (let i = 0; i < 10; i++) {
    res = Number(ler('Digite um numero: '))
    nums.push(res)
}

for (let i = 0; i < nums.length; i++) {
    numArr = nums[i]
    
    if(numArr>maior){
        maior = numArr
    }
    
}

console.log(maior)