const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 2 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 18 },
]

const isAdulto = pessoas.every(function(pessoa) {
    return pessoa.idade >= 18
})

console.log(isAdulto)