const casa1 = {
    cor: 'azul',
    localizacao: 'rua 1',
    numero: 1
}
const casa2 = { 
    ...casa1,
    numero: 2
}


console.log(casa1)
console.log(casa2)