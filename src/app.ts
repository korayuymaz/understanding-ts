interface Greetable {
  // interface is a blueprint for an object
  // that defines the properties and methods that a class must implement
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  // implements keyword is used to implement an interface
  name: string;
  age = 30; 

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}
