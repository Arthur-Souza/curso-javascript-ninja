(function(win, doc) {
  'use strict';
  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

  function DOM(elements) {
    this.elements = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(event, callback) {
    Array.prototype.forEach.call(this.elements, function(element) {
      element.addEventListener(event, callback);
    });
  }

  DOM.prototype.off = function off(event, callback) {
    Array.prototype.forEach.call(this.elements, function(element) {
      element.removeEventListener(event, callback);
    });
  }

  DOM.prototype.get = function get() {
    return this.elements;
  }

  DOM.prototype.forEach = function forEach(callback) {
    return Array.prototype.forEach.call(this.elements, callback)
  }

  DOM.prototype.map = function map(callback) {
    return Array.prototype.map.call(this.elements, callback)
  }

  DOM.prototype.reduce = function reduce(callback) {
    return Array.prototype.reduce.call(this.elements, callback)
  }

  DOM.prototype.reduceRight = function reduceRight(callback) {
    return Array.prototype.reduceRight.call(this.elements, callback)
  }

  DOM.prototype.filter = function filter(callback) {
    return Array.prototype.filter.call(this.elements, callback)
  }

  DOM.prototype.some = function some(callback) {
    return Array.prototype.some.call(this.elements, callback)
  }

  DOM.prototype.every = function every(callback) {
    return Array.prototype.every.call(this.elements, callback)
  }

  DOM.prototype.is = function is(element) {
    return Object.prototype.toString.call(element);
  }

  DOM.prototype.isArray = function isArray(array) {
    return this.is(array) === '[object Array]';
  }

  DOM.prototype.isObject = function isObject(object) {
    return this.is(object) === '[object Object]';
  }

  DOM.prototype.isFunction = function isFunction(funct) {
    return this.is(funct) === '[object Function]';
  }

  DOM.prototype.isString = function isString(string) {
    return this.is(string) === '[object String]';
  }

  DOM.prototype.isNumber = function isNumber(number) {
    return this.is(number) === '[object Number]';
  }

  DOM.prototype.isBoolean = function isBoolean(param) {
    return testObject.createObj(param) === testObject.valueObj('boolean');
  }

  DOM.prototype.isNull = function isNull(param) {
    return testObject.createObj(param) === testObject.valueObj('null') ||
      testObject.createObj(param) === testObject.valueObj('undefined');
  }

  var ajax = new XMLHttpRequest;
  var $form = new DOM('[data-js="form-cep"]');
  var $input = new DOM('[data-js="input-cep"]');
  var $status = new DOM('[data-js="status"]');
  var $result = {
    Estado: new DOM('[data-js="estado"]'),
    Cidade: new DOM('[data-js="cidade"]'),
    Bairro: new DOM('[data-js="bairro"]'),
    Logradouro: new DOM('[data-js="logradouro"]'),
  }



  function getCleanCEP() {
    return $input.get()[0].value.replace(/\D/g, '');
  }

  function replaceCEP(msg) {
    return msg.replace(/\[CEP]/g, getCleanCEP);
  }

  function statusMessage(type) {
    return {
      ok: 'Endereço referente ao CEP [CEP]:',
      loading: 'Buscando informações para o CEP [CEP]...',
      error: 'Não encontramos o endereço para o CEP [CEP].',
      incorret: 'Digite um CEP para realizar a pesquisa!',
    }[type]
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(!getCleanCEP()) {
      console.log(statusMessage('incorret'));
      return false;
    }

    handleAjaxRequest();
  }

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function showStatus(status) {
    $status.get()[0].innerText = status;
  }

  function showResult(result) {
    $result.Estado.get()[0].innerText = result.uf
    $result.Cidade.get()[0].innerText = result.localidade
    $result.Bairro.get()[0].innerText = result.bairro
    $result.Logradouro.get()[0].innerText = result.logradouro
  }

  function cleanResult() {
    showResult({
      uf: '-',
      localidade: '-',
      bairro: '-',
      logradouro: '-'
    });
  }

  function handleAjaxRequest() {
    var url = replaceCEP('https://viacep.com.br/ws/[CEP]/json/');
    ajax.open('GET', url)
    ajax.send();
    showStatus(replaceCEP(statusMessage('loading')));
    cleanResult();

    ajax.onreadystatechange = function() {
      if(isRequestOk()) {
        var data = JSON.parse(ajax.responseText);
        showResult(data)
        showStatus(replaceCEP(statusMessage('ok')));
      }
    };

    ajax.addEventListener('error', function() {
      showStatus(replaceCEP(statusMessage('error')));
    })
  }

  //console.log($input.get()[0]);
  $form.on('submit', handleSubmit)

})(window, document)
