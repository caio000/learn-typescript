var assert = require('assert');
const app = require('../dist/Calculator');


describe('Calculator', function() {
  describe('Sum', function() {
    it('The sum of 2 plus 2 equal 4', function() {
      let calculator = new app.Calculator();
      const result = calculator.calculate(2, 2, calculator.SUM);
      assert.equal(result, 4);
    });
    it('The sum of -2 plus 4 it\'s equals 2', function () {
      let calculator = new app.Calculator();
      const result = calculator.calculate(-2, 4, calculator.SUM);
      assert.equal(result, 2);
    });
    it('The sum of 10 plus -5 its\' equals 5', function () {
      let calculator = new app.Calculator();
      const result = calculator.calculate(10, -5, calculator.SUM);
      assert.equal(result, 5);
    });
    it('The sum of -5 plus -5 it\'s equals -10', function () {
      let calculator = new app.Calculator();
      const result = calculator.calculate(-5, -5, calculator.SUM);
      assert.equal(result, -10);
    });
  });
  describe('Multiply', function() {
    it('The multiplication of  5 by 5 it\'s equals 25', function() {
      let calculator = new app.Calculator();
      const result = calculator.calculate(5, 5, calculator.MULTIPLY);
      assert.equal(result, 25);
    });
    it('The multiplication of -4 by 10 it\'s equals -40', function() {
      let calculator = new app.Calculator();
      const result = calculator.calculate(-4, 10, calculator.MULTIPLY);
      assert.equal(result, -40);
    });
  });
});
