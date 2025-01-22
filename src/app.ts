interface AddFn {
  (a: number, b: number): number;
}

interface Named {
  // interface is a blueprint for an object
  // that defines the properties and methods that a class must implement
  readonly name: string;
  outputName?: string; // optional property
}

interface Greetable extends Named {
  // interface is a blueprint for an object
  // that defines the properties and methods that a class must implement
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
