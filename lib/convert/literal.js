// lib/convert/literal.js

module.exports = function (value) {
  return {
    type: 'Literal',
    value: value
  };
};