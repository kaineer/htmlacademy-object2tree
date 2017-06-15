// lib/index.js

var convertObject;
var convertArray;
var literal = require('./convert/literal');

var literalTypes = ['number', 'string', 'boolean'];

var isLiteral = function (object) {
  return literalTypes.includes(typeof (object)) || !object;
};

module.exports = function (object) {
  if (isLiteral(object)) {
    return literal(object);
  }

  if (typeof (object) === 'object') {
    if (Array.isArray(object)) {
      return convertArray(object);
    } else {
      return convertObject(object);
    }
  } else {
    throw new Error('Wrong type of argument: ' + typeof (object));
  }
};

convertObject = require('./convert/object');
convertArray = require('./convert/array');