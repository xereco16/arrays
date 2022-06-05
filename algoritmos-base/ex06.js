const {
    ler,
    escrever
} = require('./utils/utils');


//NAO CONSEGUI FAZER DE OUTRO JEITO Q N FOSSE COM .SORT()
//NAO CONSEGUI FAZER DE OUTRO JEITO Q N FOSSE COM .SORT()
//NAO CONSEGUI FAZER DE OUTRO JEITO Q N FOSSE COM .SORT()
//NAO CONSEGUI FAZER DE OUTRO JEITO Q N FOSSE COM .SORT()


let nums = [];
let ordemCres = []
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

console.log(ordemCres)











//let nums = []
//let numDig
//let numInv

//for (let i = 0; i < 10; i++) {
//    numDig = Number(ler(": "))
//    nums.push(numDig) 
//}

//numInv = nums.sort((a,b)=>a-b)

//console.log(numInv)
