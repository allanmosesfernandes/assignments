/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
// 
class Calculator {
  constructor() {
    this.result = 0;
  }
  
  validation(input) {
    const validExpression = /^[\d\s()+\-*\/.]+$/;
    if (!validExpression.test(input)) {
      throw new Error('Invalid input');
    }
  }
  add(num) {
    this.validation(num);
    this.result += num;
    console.log('Add karne ke baad', this.result);
  }

  subtract(num) {
    this.validation(num);
    this.result -= num;
    console.log('Subtract karne ke baad', this.result);
  }

  multiply(num) {
    this.validation(num);
    this.result *= num;
    console.log('Multiply karne ke baad', this.result);
  }

  divide(num) {
    this.validation(num);
    if (num === 0) {
      throw new Error('Cannot divide by zero');
    }
    this.result /= num;
    console.log('Divide karne ke baad', this.result);
  }

  getResult() {
    console.log("Final result", this.result);
    return this.result;
  }

  calculate(num) {
    this.validation(num);
    if(eval(num) === Infinity){
      throw new Error("cannot divide by 0")
    }
    const result = eval(num);
    return this.result = result;
    console.log('Calculate karne ke baad', this.result);
  }

  clear() {
    this.result = 0;
  }
}
module.exports = Calculator;
