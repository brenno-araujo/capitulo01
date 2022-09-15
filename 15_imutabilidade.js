// const casa1 = {
//     cor: 'azul',
//     localizacao: 'rua 1',
//     numero: 1
// }
// const casa2 = { 
//     ...casa1,
//     numero: 2,
//     complemento: 'casa 2'
// }


// console.log(casa1)
// console.log(casa2)

const joao = {
    enderecos: [
        {rua: 'rua 1', numero: 1},
    ]
}

const maria = {
    ...joao,
    ...joao.enderecos,
}

maria.enderecos.push({rua: 'rua 3', numero: 3})

console.log(joao)
console.log(maria)