/* 
2 Write a program that reads a person's name and displays a welcome message for them:
Example:
What is your name? João da Silva
Hello João da Silva, nice to meet you!
*/

class GreetUser {
  private userName: string;

  constructor(userName: string) {
    this.userName = userName;
  }

  showMessage() {
    return `Hello ${this.userName}, nice to meet you !`;
  }
}

const greetUser = new GreetUser("John");
console.log(greetUser.showMessage());
