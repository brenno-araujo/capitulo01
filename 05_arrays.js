const minhaLista = []
const minhaListaDeTarefas = [
    'Mandar email',
    'Colocar comida para o dog',
    'Limpar o quarto'
]

// Acessar informações em um array
console.log(minhaListaDeTarefas[0])
console.log(minhaListaDeTarefas[1])
console.log(minhaListaDeTarefas[4])

//adicionar dados em um array com push
minhaListaDeTarefas.push('Formatar computador')
console.log(minhaListaDeTarefas)

//remover dados em um array com pop
const ultimo = minhaListaDeTarefas.pop()
console.log(minhaListaDeTarefas, ultimo)

//remover dados em um array com shift
const primeiro = minhaListaDeTarefas.shift()
console.log(minhaListaDeTarefas, primeiro)

//adicionar dados em um array com unshift 
minhaListaDeTarefas.unshift('Estudar JavaScript')
console.log(minhaListaDeTarefas)

//remover dados em um array com splice
minhaListaDeTarefas.splice(2, 1)
console.log(minhaListaDeTarefas)

//encontrar a posição de um elemento no array com indexOf
const index = minhaListaDeTarefas.indexOf('Mandar email')
console.log(index)

//unir dois arrays com concat
const itens = [
    1, 'computador', 0.22
]

const itens2 = [
    1, 2, 3
]

const novoArray = itens.concat(itens2)

console.log(novoArray)

//junção de arrays com spread
const novoArray2 = [
    ...itens,
    ...itens2
]

console.log(novoArray2)

//juntar arrays em uma string com join
const novoArray3 = [
    ...itens,
    ...itens2
]

console.log(novoArray3.join(' - '))



console.log(`quantidade de itens na lista: ${minhaListaDeTarefas.length}`)
