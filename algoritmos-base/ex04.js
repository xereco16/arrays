const {
    ler,
    escrever
} = require('./utils/utils');


let nums = [];

let res

for (let i = 0; i < 10; i++) {
    res = Number(ler('Digite um numero: '))
    if(!nums.includes(res)){
        nums.push(res)
    }else{
        console.log("O NUMERO JA FOI DIGITADO DIGITE OUTRO")
    }
    
}

console.log("Os númeors digitados foram: "+nums)