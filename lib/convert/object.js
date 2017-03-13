// lib/convert/object.js

var convert = require('..');

var identifier = function (id) {
  return {
    type: 'Identifier',
    name: id
  };
};

var property = function (id, value) {
  return {
    type: 'Property',
    key: identifier(id),
    value: convert(value)
  };
};

var objectProperties = function (object) {
  return Object.keys(object).map(function (key) {
    return property(key, object[key]);
  });
};

module.exports = function (object) {
  return {
    type: 'ObjectExpression',
    properties: objectProperties(object)
  };
};