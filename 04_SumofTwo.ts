/* 
4 )Develop an algorithm that reads two integers and displays the sum between them.
Example:
Enter a value: 8
Enter another value: 5
The sum of 8 and 5 is equal to 13.
*/

class Sum {
  private num1: number;
  private num2: number;
  private result: number;

  constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
    this.result = 0;
  }

  sumNumbers() {
    this.result = this.num1 + this.num2;
    return `The sum of ${this.num1} and ${this.num2} is equal to ${this.result}`;
  }
}

const sum = new Sum(2, 2);
console.log(sum.sumNumbers());

const sum1 = new Sum(1, 2);
console.log(sum1.sumNumbers());

const sum2 = new Sum(6, 9);
console.log(sum2.sumNumbers());
