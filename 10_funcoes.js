const gerente = {
    nome: 'João',   
    sobrenome: 'Silva',
    idade: 27,
    cargo: 'Gerente de Vendas',
    salario: 5000,
}

const atendente = {
    nome: 'Maria',
    sobrenome: 'Aparecida',
    idade: 21,
    cargo: 'Atendente',
    salario: 1500,
}

function aumentarSalario(funcionario, aumento) {
    return funcionario.salario += aumento
}

console.log(aumentarSalario(gerente, 2000))
