/*
Crie um array com 5 items (tipos variados).
*/
// ES5
var myArray = ['Arthur', null, 19, {cor: 'azul'}, function() {}];

// ES6
//let myArray = ['Arthur', null, 19, {cor: azul}, function() {}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
// ES5 and ES6
function addItem(item) {
    return myArray.push(item);
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
// ES5 and ES6
myArray.push(['Olá', {noite: true}, false]);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// ES5
console.log("O segundo elemento do segundo array é " + myArray[5][1]);

// ES6
//console.log(`O segundo elemento do segundo array é ${myArray[5][1]}`);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// ES5
console.log("O primeiro array tem " + myArray.length);

// ES6
//console.log(`O primeiro array tem ${myArray.length}`);

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// ES5
console.log("O segundo array tem " + myArray[5].length);

// ES6
//console.log(`O segundo array tem ${myArray[5].length}`);

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
// ES5 and ES6
var counter = 10; // es5
//let counter = 10; // es6

while (counter <= 20) {
    if(counter % 2 === 0)
        console.log(counter);
    counter++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
// ES5 and ES6
var counter2 = 10; // es5
//let counter2 = 10; // es6

while (counter2 <= 20) {
    if(counter2 % 2 != 0)
        console.log(counter2);
    counter2++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
// ES5
for (var counter = 100; counter <= 120; counter++) {
    if (counter % 2 === 0)
        console.log(counter);
}

// ES6
// for (let counter = 100; counter <= 120; counter++) {
//     if (counter % 2 === 0)
//         console.log(counter);
// }

console.log( 'Números ímpares entre 111 e 125:' );
// ES5
for (var counter = 111; counter <= 125; counter++) {
    if (counter % 2 != 0)
        console.log(counter);
}

// ES6
// for (let counter = 111; counter <= 125; counter++) {
//     if (counter % 2 != 0)
//         console.log(counter);
// }