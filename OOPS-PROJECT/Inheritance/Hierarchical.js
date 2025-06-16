class Animal {
  eat() {
    console.log("Animal eats");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks!");
  }
}

class Cat extends Animal {
  meow() {
    console.log("Cat meows!");
  }
}

const dog = new Dog();
dog.eat(); 
dog.bark(); 

const cat = new Cat();
cat.eat();  
cat.meow(); 
