// lib/index.js

var convertObject; // = require('./convert/object');
var convertArray;
var literal = require('./convert/literal');

module.exports = function(object) {
  switch (typeof (object)) {
    case 'number':
    case 'string':
      return literal(object);

    case 'object':
      if (!object) {
        return literal(object); // NULL
      } else if (Array.isArray(object)) {
        return convertArray(object);
      } else {
        return convertObject(object);
      }

    default:
      throw new Error('Wrong type of argument: ' + typeof (object));
  }
};

convertObject = require('./convert/object');
convertArray = require('./convert/array');