/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
// ES5 and ES6
function calculateSum(x, y) {
  return x + y;
}

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
// ES5
console.log("A soma de 5 e 15 é igual a " + calculateSum(5, 15));

// ES6
// console.log(`A soma de 5 e 15 é igual a ${calculateSum(5, 15)}`);

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
// ES5
console.log("O nome da função que faz a soma é " + calculateSum.name);

// ES6
// console.log(`O nome da função que faz a soma é ${calculateSum.name}`);

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
// ES5 and ES6
function showName() {
  return 'Arthur Souza';
}

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
// ES5
var varShowName = showName;

// ES6
// let varShowName = showName;

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
// ES5
console.log("A função " + varShowName.name + " retorna " + varShowName());

// ES6
// console.log(`A função ${varShowName.name} retorna ${varShowName()}`);

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
// ES5 and ES6
function calculator(operator) {
  return function(x, y) {
    switch(operator) {
      case '+':
        return x + y;
      case '-':
        return x - y;
      case '*':
        return x * y;
      case '/':
        return x / y;
      case '%':
        return x % y;
      default:
        return "Operação inválida."
    }
  }
}

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
// ES5
var sum = calculator('+');

// ES6
// let sum = calculator('+');

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
// ES5 and ES6
console.log(sum(5, 5));

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
// ES5
var subtraction = calculator('-');
var multiplication = calculator('*');
var division = calculator('/');
var mod = calculator('%');

//ES6
//let subtraction = calculator('-');
//let multiplication = calculator('*');
//let division = calculator('/');
//let mod = calculator('%');

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
// ES5 and ES6
console.log(subtraction(10, 5)); 
console.log(multiplication(10, 5)); 
console.log(division(10, 5)); 
console.log(mod(10, 5)); 