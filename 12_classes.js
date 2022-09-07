class herois {
    constructor(nome, poder, idade) {
        this.nome = nome;
        this.poder = poder;
        this.idade = idade;
    }

    apresentar() {
        return `Olá, eu sou o ${this.nome} e tenho o poder de ${this.poder}`;
    }

    aumentarIdade() {
        return this.idade += 1;
    }

    aumentarPoder() {
        return this.poder += 1;
    }
}

const heroi01 = new herois("Homem de Ferro", 100, 40);
const heroi02 = new herois("Capitão América", 90, 100);

console.log(heroi01.apresentar());
console.log(heroi02.apresentar());

console.log(heroi01.aumentarIdade());
console.log(heroi02.aumentarIdade());

console.log(heroi01.aumentarPoder());
console.log(heroi02.aumentarPoder());
