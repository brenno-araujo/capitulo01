//pegar valor do terminal
var args = process.argv

const saldo = args[args.length - 1]

if (isNaN(saldo)) {
    console.log("Valor inválido");
    return;
}

if (saldo > 0) {
    console.log("Você está no azul")
} else if (saldo < 0) {
    console.log("Você está no vermelho")
} else {
    console.log("Você está no zero")
}



