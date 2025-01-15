/* 
8)
Develop a program that reads a distance in meters and displays the equivalent values in other units.
Example:
Enter a distance in meters: 185.72
The distance of 185.72m corresponds to:
0.18572Km
1.8572Hm
18.572Dam
1857.2dm
18572.0cm
185720.0mm
*/

class MeasureConverter {
  private meters: number;
  private kilometers: number;
  private hectometers: number;
  private decameters: number;
  private decimeters: number;
  private centimeters: number;
  private milimeters: number;

  constructor(meters: number) {
    this.meters = meters;
    this.kilometers = 0;
    this.hectometers = 0;
    this.decameters = 0;
    this.decimeters = 0;
    this.centimeters = 0;
    this.milimeters = 0;
  }

  convertMeasures(meters: number) {
    this.kilometers = meters / 1000;
    this.hectometers = meters / 100;
    this.decameters = meters / 10;
    this.decimeters = meters * 10;
    this.centimeters = meters * 100;
    this.milimeters = meters * 1000;

    return `The distance of ${this.meters}m corresponds to:
    ${this.kilometers}km
    ${this.hectometers}hm
    ${this.decameters}dam
    ${this.decimeters.toFixed(1)}dm
    ${this.centimeters.toFixed(2)}cm
    ${this.milimeters.toFixed(3)}mm`;
  }
}

const measure1 = new MeasureConverter(2);
console.log(measure1.convertMeasures(2));

const measure2 = new MeasureConverter(25);
console.log(measure2.convertMeasures(25));

const measure3 = new MeasureConverter(200);
console.log(measure3.convertMeasures(200));

const measure4 = new MeasureConverter(185.72);
console.log(measure4.convertMeasures(185.72));

const measure5 = new MeasureConverter(400);
console.log(measure5.convertMeasures(400));
