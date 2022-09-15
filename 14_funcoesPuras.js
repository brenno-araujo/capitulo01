const carrinhoDeCompras = {
    user: 'João', 
    itens: [
        { nome: 'Caneta', qtde: 10, preco: 7.99 },
        { nome: 'Impressora', qtde: 0, preco: 649.50 },
    ],
}

function formatarCarrinho(carrinhoDeCompras) {
    return result = {
        user: carrinhoDeCompras.user,
        itens: carrinhoDeCompras.itens.map(function(item) {
            return {
                nome: item.nome,
                subtotal: item.qtde * item.preco
            }
        })
    }
}

console.log(formatarCarrinho(carrinhoDeCompras))
console.log(carrinhoDeCompras)
    