  export class Calculator {
    SUM = (num1: number, num2: number) => num1 + num2;
    MULTIPLY = (num1: number, num2: number) => num1 * num2;

    calculate(num1: number, num2: number, callback: (num1: number, num2: number) => number) : number {
      return callback(num1, num2);
    }
  }
