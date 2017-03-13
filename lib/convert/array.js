// lib/convert/array.js

var convert = require('..');

var arrayElements = function (array) {
  return array.map(function (element) {
    return convert(element);
  });
};

module.exports = function (array) {
  return {
    type: 'ArrayExpression',
    elements: arrayElements(array)
  };
};