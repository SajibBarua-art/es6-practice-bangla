class Parent{
    constructor(){
        this.fatherName = "Akbar";
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    // function into a class
    getFullName() {
        return this.name + " " + this.fatherName;
    }
}

const baby1 = new Child('Babar');
const baby2 = new Child('Jabar');

console.log(baby1, baby2);
console.log(baby1.getFullName());