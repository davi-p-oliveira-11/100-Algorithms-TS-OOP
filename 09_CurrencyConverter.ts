/* 
9) Write an algorithm that reads how much money a person has in their wallet (in R$) 
and shows how many dollars they can buy. Consider US$1.00 = R$3.45.
*/

class CurrencyConverter {
  private avaiableBRL: number;
  private dollarAmount: number;

  constructor(avaiableBRL: number) {
    this.avaiableBRL = avaiableBRL;
    this.dollarAmount = 0;
  }

  convertToDollar(avaiableBRL: number) {
    this.dollarAmount = this.avaiableBRL / 3.45;
    return `You can buy a total of ${this.dollarAmount.toFixed(2)} USD`;
  }
}

const conversion1 = new CurrencyConverter(10);
console.log(conversion1.convertToDollar(10));

const conversion2 = new CurrencyConverter(100);
console.log(conversion2.convertToDollar(100));

const conversion3 = new CurrencyConverter(3.76);
console.log(conversion3.convertToDollar(3.76));

const conversion4 = new CurrencyConverter(200);
console.log(conversion4.convertToDollar(200));

const conversion5 = new CurrencyConverter(2);
console.log(conversion5.convertToDollar(2));
