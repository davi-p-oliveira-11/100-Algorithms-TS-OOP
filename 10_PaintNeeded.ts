/* 
 10) Write an algorithm that reads the width and height of a wall, 
 calculates and displays the area to be painted, and the amount of paint needed for the job, 
 knowing that each liter of paint covers an area of 2 square meters.
*/

class PaintNeeded {
  private width: number;
  private height: number;
  private area: number;
  private paintNeeded: number;

  constructor() {
    this.width = 0;
    this.height = 0;
    this.area = 0;
    this.paintNeeded = 0;
  }

  calculateArea(width: number, height: number, area: number) {
    this.area = this.width * this.height;
    return `The area of the wall is ${area}`;
  }

  calculatePaintNeeded(area: number, paintNeeded: number) {
    this.paintNeeded = this.area * 0.5;
    return `The amount of paint needed is ${paintNeeded}`;
  }
}
