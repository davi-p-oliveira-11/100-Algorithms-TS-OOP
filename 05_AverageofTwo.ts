/* 
5 Write a program that reads a student's two grades in a subject and displays their average in the course.

Example:
Grade 1: 4.5  
Grade 2: 8.5  
The average between 4.5 and 8.5 is 6.5
*/

class Average {
  private grade1: number;
  private grade2: number;
  private average: number;

  constructor(grade1: number, grade2: number) {
    this.grade1 = grade1;
    this.grade2 = grade2;
    this.average = 0;
  }

  calculateAverage() {
    this.average = (this.grade1 + this.grade2) / 2;
    return `The average between ${this.grade1} and ${this.grade2} is equal to ${this.average}`;
  }
}

const student1 = new Average(3, 7);
console.log(student1.calculateAverage());

const student2 = new Average(6, 9);
console.log(student2.calculateAverage());

const student3 = new Average(3, 1);
console.log(student3.calculateAverage());
