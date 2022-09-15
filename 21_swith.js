//pegar valor do terminal
var args = process.argv

const saldo = args[args.length - 1]

switch (saldo) {
    case '0':
        console.log("Globo");
        break;
    case '1':
        console.log("Record");
        break;
    case '2':
        console.log("Sbt");
        break;
    default:
        console.log("Canal não encontrado");
        break;
}