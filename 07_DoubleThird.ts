/* 
7) Create an algorithm that reads a real number and displays its double and its one-third.

Example:
Enter a number: 3.5
The double of 3.5 is 7.0
One-third of 3.5 is 1.16666
*/

class DoubleThird {
  private num1: number;
  private double: number;
  private third: number;

  constructor(num1: number) {
    this.num1 = num1;
    this.double = 0;
    this.third = 0;
  }

  calculateDoubleThird(num1: number) {
    this.double = num1 * 2;
    this.third = num1 / 3;
    return `The double of ${this.num1} is ${this.double} \n
The third part of ${this.num1} is ${this.third.toFixed(2)} `;
  }
}

const number1 = new DoubleThird(8);
console.log(number1.calculateDoubleThird(8));

const number2 = new DoubleThird(7);
console.log(number2.calculateDoubleThird(7));

const number3 = new DoubleThird(3);
console.log(number3.calculateDoubleThird(3));
