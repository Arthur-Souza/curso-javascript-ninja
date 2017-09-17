# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
// ES5 
var isTruthy = function(arg) {
    return !!arg;
}

//ES6
let isTruthy = arg => !!arg


// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
// ES5 and ES6
isTruthy(false);
isTruthy(undefined);
isTruthy(NaN);
isTruthy(null);
isTruthy(0);
isTruthy(-0);
isTruthy('');

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
// ES5 and ES6
isTruthy(true);
isTruthy(1);
isTruthy(2);
isTruthy([]);
isTruthy({});
isTruthy('hello');
isTruthy(25*2);
isTruthy(function() {});
isTruthy({a: 1, b: 2});

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
// ES5
var carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    placa: 'GOT-2019',
    ano: 2018,
    cor: '#000000',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

// ES6
let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    placa: 'GOT-2019',
    ano: 2018,
    cor: '#000000',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
// ES5 and ES6
carrro.mudarCor = function(cor) {
    this.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
// ES5 and ES6
carro.obterCor = function() {
    return this.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
// ES5 and ES6
carro.obterModelo = function() {
    return this.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
// ES5 and ES6
carro.obterMarca = function() {
    return this.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
// ES5
carro.obterMarcaModelo = function() {
    return "Esse carro é um " + this.marca + " " + this.modelo;
}

// ES6
carro.obterMarcaModelo = function() {
    return `Esse carro é um ${this.marca} ${this.modelo}`
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
?

// ES5
carro.addPessoas = function(pessoas) {
    var total = this.quantidadePessoas + pessoas;
    var assentosVagos = this.assentos - this.quantidadePessoas;
    var singularPlural = {
        assentosVagas: assentosVagos == 1 ? 'pessoa' : 'pessoas',
        total: total == 1 ? 'pessoa' : 'pessoas'
    }

    if(this.quantidadePessoas >= this.assentos)
        return "O carro já está lotado!";

    if(total > this.assentos)
        return "Só cabem mais " + assentosVagos + " " + singularPlural.assentosVagas;

    this.quantidadePessoas += pessoas;

    return "Já temos " + total + " " + singularPlural.total + " no carro!";
}

// ES6
carro.addPessoas = function(pessoas) {
    let total = this.quantidadePessoas + pessoas;
    let assentosVagos = this.assentos - this.quantidadePessoas;

    if(this.quantidadePessoas >= this.assentos)
        return "O carro já está lotado!";

    if(total > this.assentos)
        return `Só cabem mais ${assentosVagos} ${assentosVagos == 1 ? 'pessoa' : 'pessoas'}`;

    this.quantidadePessoas += pessoas;
    return `Já temos ${total} ${total == 1 ? 'pessoa' : 'pessoas'} no carro!`;
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
//ES5 and ES6
carro.obterCor(); // "#000000"

// Mude a cor do carro para vermelho.
//ES5 and ES6
carro.mudarCor("#ff0000");

// E agora, qual a cor do carro?
//ES5 and ES6
carro.obterCor(); // "#ff0000"

// Mude a cor do carro para verde musgo.
//ES5 and ES6
carro.mudarCor("#466028");

// E agora, qual a cor do carro?
//ES5 and ES6
carro.obterCor(); // "#466028"

// Qual a marca e modelo do carro?
//ES5 and ES6
carro.obterMarca(); // "Toyota"

// Adicione 2 pessoas no carro.
//ES5 and ES6
carro.addPessoas(2); // "Já temos 2 pessoas no carro!"

// Adicione mais 4 pessoas no carro.
//ES5 and ES6
carro.addPessoas(4); // "Só cabem mais 3 pessoas"

// Faça o carro encher.
//ES5 and ES6
carro.addPessoas(5); // "Já temos 5 pessoas no carro!"

// Tire 4 pessoas do carro.
//ES5 and ES6
carro.addPessoas(-4); // "Já temos 1 pessoas no carro!"

// Adicione 10 pessoas no carro.
//ES5 and ES6
carro.addPessoas(10); // "Só cabem mais 4 pessoas"

// Quantas pessoas temos no carro?
//ES5 and ES6
carro.quantidadePessoas; // 1
```
