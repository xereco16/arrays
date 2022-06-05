const {
    ler,
    escrever
} = require('./utils/utils');

let nomes = []
let nomesInv = []
let nomesDig 



for (let i = 0; i < 5; i++) {
    nomesDig = String(ler("Digite um nome: "))
    nomes.push(nomesDig)
    nomesInv.unshift(nomesDig)
}

console.log("Os nomes digitados fora: "+nomes)
console.log("Os nomes ao contrario ficam: "+nomesInv)


