/* 
6) Write a program that reads an integer and displays its predecessor and successor.
Example:
Enter a number: 9
The predecessor of 9 is 8
The successor of 9 is 10
*/

class PredecessorSuccesor {
  private num1: number;

  constructor(num1: number) {
    this.num1 = num1;
  }

  calculateNums() {
    return `The succesor of ${this.num1} is ${this.num1 + 1} \n 
The predecessor of ${this.num1} is ${this.num1 - 1}`;
  }
}

const num1 = new PredecessorSuccesor(2);
console.log(num1.calculateNums());

const num2 = new PredecessorSuccesor(7);
console.log(num2.calculateNums());

const num3 = new PredecessorSuccesor(15);
console.log(num3.calculateNums());
