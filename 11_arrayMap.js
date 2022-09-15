const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const nomes = produtos.map(function(produto) {
    return [produto.nome, produto.preco]
})
console.log(nomes)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const dobro = numeros.map(function(numero) {
    return numero * 2
})
console.log(dobro)
