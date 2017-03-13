// test/codegen_test.js

const {generate} = require('escodegen');
const convert = require('..');
const {expect} = require('chai');

const convertGenerateEval = function (object) {
  const ast = convert(object);
  const code = generate(ast);

  return eval('(' + code + ')'); // Generated object seems like code block :(
};

describe('Convert', () => {
  it('should keep array structure', () => {
    const array = [1, 'string', null];

    expect(convertGenerateEval(array)).to.deep.equal(array);
  });

  it('should keep object structure', () => {
    const object = {
      hello: 'World',
      structure: {
        inside: [38, 42]
      }
    };

    expect(convertGenerateEval(object)).to.deep.equal(object);
  });
});
