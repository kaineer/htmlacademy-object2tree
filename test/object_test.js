// test/object_test.js

const convert = require('..');
const {expect} = require('chai');

describe('Object convert', () => {
  context('empty object', () => {
    const object = {};
    let result;

    beforeEach(() => {
      result = convert(object);
    });

    it('should convert object into object', () => {
      expect(result).to.be.an('object');
    });

    it('should have ObjectExpression type', () => {
      expect(result.type).to.eq('ObjectExpression');
    });

    it('should have `properties` property', () => {
      expect(result.properties).to.be.instanceof(Array);
    });

    it('should have empty `properties` array', () => {
      expect(result.properties.length).to.eq(0);
    });
  });

  context('object with properties', () => {
    const object = {
      hello: 'World',
      deep: {
        inside: 'A String'
      }
    };

    let result;

    beforeEach(() => {
      result = convert(object);
    });

    it('should have two properties', () => {
      expect(result.properties.length).to.eq(2);
    });

    it('should have first property as a literal', () => {
      expect(result.properties[0].value.type).to.eq('Literal');
    });

    it('should have second property as an ObjectExpression', () => {
      expect(result.properties[1].value.type).to.eq('ObjectExpression');
    });
  });
});