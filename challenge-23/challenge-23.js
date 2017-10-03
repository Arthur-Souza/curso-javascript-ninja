/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

(function(win, doc) {
  'use strict';

  var $display = doc.querySelector('#display');
  var $numberButton = doc.querySelectorAll('[data-js=button-number]');
  var $operatorButton = doc.querySelectorAll('[data-js=button-operator]');
  var $cleanButton = doc.querySelector('[data-js=button-clean]');
  var $resultButton = doc.querySelector('[data-js=button-result]');
  var calculatoStorage = '';

  function isValidNumber(number) {
    return /[\d]/.test(number);
  }

  function isValidOperator(operator) {
    return /[\+\-\÷x]/.test(operator);
  }

  function startsWithNumbers(value) {
    return /^\d/.test(value);
  }

  function isEndOperator(value) {
    return /[\+\-\÷x]$/.test(value);
  }

  function displayOnScreen(value) {
    $display.value = value;
  }

  function getNumber(event) {
    event.preventDefault();

    if (!isValidNumber(this.value))
      return false;

    calculatoStorage += this.value;
    displayOnScreen(calculatoStorage);
  }

  function getOperator(event) {
    event.preventDefault();

    if (!isValidOperator(this.value) || !startsWithNumbers(calculatoStorage))
      return false;

    if (isEndOperator(calculatoStorage)) {
      calculatoStorage = calculatoStorage.slice(0, -1);
    }

    calculatoStorage += this.value;
    displayOnScreen(calculatoStorage);
  }

  function cleanScreen(event) {
    event.preventDefault();

    calculatoStorage = '';
    displayOnScreen('0');
  }

  function result(event) {
    event.preventDefault();

    if(isEndOperator(calculatoStorage) && isValidOperator(calculatoStorage))
      return false;

    var calculato = calculatoStorage.replace(/([x\÷])/g, function(regex, arg1) {
      if(arg1 === '÷')
        return '/';

      return '*';
    })

    calculatoStorage = eval(calculato);
    displayOnScreen(calculatoStorage);
  }

  Array.prototype.forEach.call($numberButton, function(button) {
    button.addEventListener('click', getNumber, false);
  });

  Array.prototype.forEach.call($operatorButton, function(button) {
    button.addEventListener('click', getOperator, false);
  });

  $resultButton.addEventListener('click', result, false);

  $cleanButton.addEventListener('click', cleanScreen, false)


} (window, document))
