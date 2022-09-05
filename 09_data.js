//meses comecam do zero

const dataDeAniversario = new Date(1988, 0, 15);
console.log(dataDeAniversario);

// data com toString
// const hoje = new Date();
// console.log(hoje.toString());

// data com toDateString
// const hoje = new Date();
// console.log(hoje.toDateString());

// data com toLocaleDateString
// const hoje = new Date();
// console.log(hoje.toLocaleDateString());

// data com toLocaleString
// const hoje = new Date();
// console.log(hoje.toLocaleString());

//formato global ISO 8601
// const hoje = new Date();
// console.log(hoje.toISOString());

// const dia = dataDeAniversario.getDate();

// dataDeAniversario.setDate(25);

// const mes = dataDeAniversario.getMonth();

// dataDeAniversario.setMonth(11);

// const ano = dataDeAniversario.getFullYear();

// dataDeAniversario.setFullYear(2020);

// const hora = dataDeAniversario.getHours();

// dataDeAniversario.setHours(23);

// const minutos = dataDeAniversario.getMinutes();

// dataDeAniversario.setMinutes(59);

// const segundos = dataDeAniversario.getSeconds();

// dataDeAniversario.setSeconds(59);

// console.log(dia, mes, ano, hora, minutos, segundos);

const dateOne = new Date(1988, 0, 15, 0, 0, 0);

const dateTwo = new Date(1988, 0, 15, 1,  0, 0);

// if (dateOne.getTime() === dateTwo.getTime()) {
//     console.log('Datas iguais');
// } else {
//     console.log('Datas diferentes');
// }

if (dateOne.getDate() > dateTwo.getDate()) {
    console.log('dateOne é maior que dateTwo');
} else {
    console.log('dateOne é menor que dateTwo');
}







