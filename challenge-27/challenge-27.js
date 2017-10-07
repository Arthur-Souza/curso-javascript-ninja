(function(win, doc) {
  /*
  Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
  métodos semelhantes aos que existem no array, mas que sirvam para os
  elementos do DOM selecionados.
  Crie os seguintes métodos:
  - forEach, map, filter, reduce, reduceRight, every e some.

  Crie também métodos que verificam o tipo do objeto passado por parâmetro.
  Esses métodos não precisam depender de criar um novo elmento do DOM, podem
  ser métodos estáticos.

  Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
  no objeto, como nos exemplos abaixo:
  DOM.isArray([1, 2, 3]); // true
  DOM.isFunction(function() {}); // true
  DOM.isNumber('numero'); // false

  Crie os seguintes métodos para verificação de tipo:
  - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  O método isNull deve retornar `true` se o valor for null ou undefined.
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

  $div = new DOM('div');

  function filtro(element) {
    return element.className === 'div-03';
  }

  console.log($div.filter(filtro));

  console.log($div.isArray([1, 2, 3]));
  console.log($div.isFunction(function() {}));
  console.log($div.isNumber('numero'));

})()
