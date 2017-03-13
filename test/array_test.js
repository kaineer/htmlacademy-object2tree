// test/array_test.js

const convert = require('..');
const {expect} = require('chai');

describe('Array convert', () => {
  context('empty array', () => {
    const array = [];
    const result = convert(array);

    it('should convert object into object', () => {
      expect(result).to.be.an('object');
    });

    it('should have ArrayExpression type', () => {
      expect(result.type).to.eq('ArrayExpression');
    });

    it('should have `elements` property', () => {
      expect(result.elements).to.be.instanceof(Array);
      expect(result.elements.length).to.eq(0);
    });
  });

  context('array with elements', () => {
    const array = [1, [2]];
    const result = convert(array);

    it('should have two elements', () => {
      expect(result.elements.length).to.eq(2);
    });

    it('should have first element as literal', () => {
      expect(result.elements[0].type).to.eq('Literal');
    });

    it('should have second element as ArrayExpression', () => {
      expect(result.elements[1].type).to.eq('ArrayExpression');
    });
  });
});