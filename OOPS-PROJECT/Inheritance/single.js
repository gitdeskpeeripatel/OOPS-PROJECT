class Animal {
    constructor(name, age) {
        this.name = name;
        this.breed = "Labrador";


    }
    printMsg() {
        console.log(`The Animal name is: ${this.name} & Breed of my dog is ${this.breed}`);

    }
}
class Dog extends Animal {
    constructor(name, age) {
        super(name, age)
    }
    bark() {

        console.log("Barking!!");
    }
}
let dog = new Dog("Daisy", "labrador");
dog.printMsg();
dog.bark();
