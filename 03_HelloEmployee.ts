/* 
3) Create a program that reads the name and salary of an employee, and displays a message at the end.

Example:
Employee Name: Jane Doe
Salary: 1850.45
The employee Jane Doe has a salary of R$1850.45 in June.
*/

class GreetEmployee {
  private name: string;
  private salary: string;
  private month: string;

  constructor(name: string, salary: string, month: string) {
    this.name = name;
    this.salary = salary;
    this.month = month;
  }

  showMessage() {
    return `The employee ${this.name} has a salary of ${this.salary} USD in ${this.month}`;
  }
}

const greetEmployee = new GreetEmployee("Mary", "9000", "March");
console.log(greetEmployee.showMessage());
