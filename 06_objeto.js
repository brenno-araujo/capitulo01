const heroi = {
    nome: 'Batman',
    idade: 35,
    sexo: 'M'
};
// console.log(heroi.nome);
// console.log(heroi.idade);
// console.log(heroi.sexo);

// console.log(Object.keys(heroi));
// console.log(Object.values(heroi));

const pessoa = {
    nome: 'Brenno',
    idade: 20,
    peso: 80.5,
    sexo: 'M',
    andar: function () {
        console.log('andar');
    }
};

const novoObjeto = {
    ...heroi,
    ...pessoa
};

delete novoObjeto.nome;

// const novoObjeto = Object.assign({}, heroi, pessoa);
console.log(novoObjeto);