function getHora(hora){
    if (hora > 12 && hora <= 18) {
        return 'Boa tarde'
    }

    if (hora > 18 && hora <= 24) {
        return 'Boa noite'
    }

    if (hora > 0 && hora <= 6) {
        return 'Boa madrugada'
    }

    return 'Bom dia'
}

function saudacoes(nome, hora) {
    return `${getHora(hora)} ${nome}`
}

console.log(saudacoes('João', 7))

const usuario = {
    nome: 'João',
    idade: 25
}

if (usuario.idade >= 18) {
    usuario.isAdulto = true
}

console.log(usuario)