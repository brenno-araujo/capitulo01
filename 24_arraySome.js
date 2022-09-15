const pessoas = [
    { nome: 'Luiz', idade: 5 },
    { nome: 'Maria', idade: 2 },
    { nome: 'Eduardo', idade: 7 },
    { nome: 'Letícia', idade: 17 },
    { nome: 'Rosana', idade: 15 },
]

const isAdulto = pessoas.some(function(pessoa) {
    return pessoa.idade >= 18
})

console.log(isAdulto)