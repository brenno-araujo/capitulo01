const pessoa = {
    _nome: '',
    _idade: 0,
    _sexo: '',
    get nome() {
        return this._nome;
    },
    set nome(nome) {
        this._nome = nome.toUpperCase();
    },
    get idade() {
        return this._idade;
    },
    set idade(idade) {
        this._idade = idade;
    },
    get sexo() {
        return this._sexo;
    },
    set sexo(sexo) {
        this._sexo = sexo;
    },
    get podeDirigir() {
        return this._idade >= 18;
    }
};

pessoa.nome = 'Brenno';
pessoa.idade = 17;
pessoa.sexo = 'M';

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.sexo);
console.log(pessoa.podeDirigir);