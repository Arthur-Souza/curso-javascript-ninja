# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.

// ES5
var myObject = {};

// ES6
let myObject = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

// ES5
var pessoa = {
    nome: "Arthur",
    sobrenome: "Souza",
    sexo: "Masculino",
    idade: 19,
    altura: 1.76,
    peso: 62,
    andando: false,
    caminhouQuantosMetros: 0
};

// ES6
let pessoa = {
    nome: "Arthur",
    sobrenome: "Souza",
    sexo: "Masculino",
    idade: 19,
    altura: 1.76,
    peso: 62,
    andando: false,
    caminhouQuantosMetros: 0
};

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

// ES5 and ES6
pessoa.fazerAnivesario = function() {
    this.idade++;
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

// ES5 and ES6
pessoa.andar = function(distancia) {
    this.caminhouQuantosMetros += distancia;
    this.andando = true;
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

// ES5 and ES6
pessoa.parar = function() {
    this.andando = false;
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

// ES5
pessoa.nomeCompleto = function() {
    return "Olá! Meu nome é " + this.nome + " " + this.sobrenome
}

// ES6
pessoa.nomeCompleto = function() {
    return `Olá! Meu nome é ${this.nome} ${this.sobrenome}`
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

// ES5
pessoa.mostrarIdade = function() {
    return "Olá, eu tenho " + this.idade + " anos!"
}

// ES6
pessoa.mostrarIdade = function() {
    return `Olá, eu tenho ${this.idade} anos!`
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

// ES5
pessoa.mostrarPeso = function() {
    return "Eu peso " + this.peso + "Kg."
}

// ES6
pessoa.mostrarPeso = function() {
    return `Eu peso ${this.peso}Kg.!`
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
// ES5
pessoa.mostrarAltura = function() {
    return "Minha altura é " + this.altura + "m."
}

// ES6
pessoa.mostrarAltura = function() {
    return `Minha altura é ${this.altura}m.`
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

// ES5 and ES6
pessoa.nomeCompleto(); // Olá! Meu nome é Arthur Souza!

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

// ES5 and ES6
pessoa.mostrarIdade(); // Olá, eu tenho 19 anos!

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

// ES5 and ES6
pessoa.mostrarPeso(); // Eu peso 62Kg.

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

// ES5 and ES6
pessoa.mostrarAltura(); // Minha altura é 1.76m..

/*
Faça a `pessoa` fazer 3 aniversários.
*/

// ES5 and ES6
pessoa.fazerAnivesario();
pessoa.fazerAnivesario();
pessoa.fazerAnivesario();

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

// ES5 and ES6
pessoa.mostrarIdade(); // Olá, eu tenho 22 anos!

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

// ES5 and ES6
pessoa.andar(5);
pessoa.andar(10);
pessoa.andar(20);

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

// ES5 and ES6
pessoa.andando; // true

/*
Se a pessoa ainda está andando, faça-a parar.
*/

// ES5 and ES6
pessoa.parar();

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

// ES5 and ES6
pessoa.andando; //false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

// ES5 and ES6
pessoa.caminhouQuantosMetros; // 35


/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

// ES5
pessoa.apresentacao = function() {
    var sexo = this.sexo === 'Masculino' ? 'o' : 'a';
    var idade = this.idade === 1 ? 'ano' : 'anos';
    var metrosCaminhados = this.caminhouQuantosMetros === 1 ? 'metro' : 'metros';
    
    return "Olá, eu sou " + sexo + " " + this.nome + " " + this.sobrenome + ", tenho " + this.idade + " " + idade + ", meu peso é " + this.peso + "Kg, e só hoje, eu já caminhei " + this.caminhouQuantosMetros + " " + metrosCaminhados;
}

// ES6
pessoa.apresentacao = function() {
    let sexo = this.sexo === 'Masculino' ? 'o' : 'a';
    let idade = this.idade === 1 ? 'ano' : 'anos';
    let metrosCaminhados = this.caminhouQuantosMetros === 1 ? 'metro' : 'metros';
    
    return `Olá, eu sou ${sexo} ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${idade}, meu peso é ${this.peso}Kg, e só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${metrosCaminhados}`;
}

// Agora, apresente-se ;)

// ES5 and ES6
pessoa.apresentacao();
```
