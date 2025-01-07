/*
1) Write a program that displays the message "Hello, World!" on the screen.
*/

class Message {
  private message: string;

  constructor(message: string) {
    this.message = message;
  }

  showMessage() {
    return message;
  }
}

const message = new Message("Hello World !");
console.log(message.showMessage());
