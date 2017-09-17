/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ES5
var myFunction = function() {
    return [0,1,2,3];
}

// ES6
// let myFunction = () => [0,1,2,3]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ES5
var myFunction2 = function(array) {
    return array;
}

// ES6
// let myFunction2 = array => array

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ES5 and ES6
console.log(myFunction2([0,1,2,3])[1]); 


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
// ES5
var myFunction3 = function(array, index) {
    return array[index];
}

// ES6
// let myFunction3 = (array, index) => array[index]

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ES5
var myArray = ['hello', 19, true, ['js', 'js'], {name: 'Arthur'}]

// ES6
// let myArray = ['hello', 19, true, ['js', 'js'], {name: 'Arthur'}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ES5 and ES6
console.log(myFunction3(myArray, 0));
console.log(myFunction3(myArray, 1));
console.log(myFunction3(myArray, 2));
console.log(myFunction3(myArray, 3));
console.log(myFunction3(myArray, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ES5
function book(name) {
    var allBooks = {
        "O monge e o executivo": {
            quantidadePaginas: 144,
            autor: 'James C. Hunter',
            editora: 'Sextante'

        },
        "O poder do hábito": {
            quantidadePaginas: 456,
            autor: 'Charles Duhigg ',
            editora: 'Objetiva'

        },
        "A Estratégia do Olho de Tigre": {
            quantidadePaginas: 176,
            autor: 'JRenato Grinberg',
            editora: 'Gente'

        }
    }

    return !!allBooks[name] ? allBooks[name] : allBooks;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ES5 and ES6
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ES5
console.log("O livro O monge e o executivo tem " + book('O monge e o executivo').quantidadePaginas + " páginas!");

// ES6
//console.log(`O livro O monge e o executivo tem ${book('O monge e o executivo').quantidadePaginas} páginas!`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ES5
console.log("O autor do livro O monge e o executivo é " + book('O monge e o executivo').autor + ".");

// ES6
//console.log(`O autor do livro O monge e o executivo é ${book('O monge e o executivo').autor}.`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ES5
console.log("O livro O monge e o executivo foi publicado pela editora " + book('O monge e o executivo').editora + ".");

// ES6
//console.log(`O livro O monge e o executivo foi publicado pela editora ${book('O monge e o executivo').editora}.`)