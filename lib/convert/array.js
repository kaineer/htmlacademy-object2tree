// lib/convert/array.js

var convert = require('..');

module.exports = function (array) {
  return {
    type: 'ArrayExpression',
    elements: array.map(convert)
  };
};
