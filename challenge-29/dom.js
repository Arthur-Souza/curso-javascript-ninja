(function(win, doc) {
  'use strict';

  function DOM(elements) {
    if (!(this instanceof DOM))
      return new DOM(elements)

    this.elements = doc.querySelectorAll(elements)

    // if(this.elements.length === 1)
    //   return this.get(0);
  }

  DOM.prototype.get = function get(index) {
    if(!index) return this.elements[0];

    return this.elements[index];
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

  DOM.is = function is(element) {
    return Object.prototype.toString.call(element);
  }

  DOM.isArray = function isArray(array) {
    return this.is(array) === '[object Array]';
  }

  DOM.isObject = function isObject(object) {
    return this.is(object) === '[object Object]';
  }

  DOM.isFunction = function isFunction(funct) {
    return this.is(funct) === '[object Function]';
  }

  DOM.isString = function isString(string) {
    return this.is(string) === '[object String]';
  }

  DOM.isNumber = function isNumber(number) {
    return this.is(number) === '[object Number]';
  }

  DOM.isBoolean = function isBoolean(param) {
    return testObject.createObj(param) === testObject.valueObj('boolean');
  }

  DOM.isNull = function isNull(param) {
    return testObject.createObj(param) === testObject.valueObj('null') ||
      testObject.createObj(param) === testObject.valueObj('undefined');
  }

  win.DOM = DOM;

})(window, document)
