// structure of class
class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = 'Patiya Adarsha High School';
    }
}

// To declare a variable of class
const student1 = new Student(101, "Sajib");
const student2 = new Student(102, "Jisan");

// To output whole class
console.log(student1, student2);

// To output a single value of class
console.log(student1.name);