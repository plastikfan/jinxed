
(function () {
  const chai = require('chai');
  chai.use(require('dirty-chai'));
  const expect = chai.expect;
  const library = require('../index');
  const FnToken = library.FUNCTION_TOKEN;

  describe('functify', () => {
    context('given: an object without functions', () => {
      it('should: return a string that does not include the "_function" place-holder token', () => {
        const TestObject = {
          a: 1,
          b: 2
        };

        const result = library.functify(TestObject);
        expect(result).not.to.contain(FnToken);
      });
    });

    context('given: an object which includes a member function', () => {
      it('should: return a string that does include the "_function" place-holder token representing "fn"', () => {
        const TestObject = {
          a: 1,
          b: 2,
          fn: () => { console.log('I am a function without purpose'); }
        };

        const result = library.functify(TestObject);
        expect(result).to.contain(FnToken);
      });
    });
  });
})();
