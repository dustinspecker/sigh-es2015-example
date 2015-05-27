class Animal {
  constructor() {

  }

  says() {
    return 'animal noise';
  }
}

export class Cat extends Animal {
  constructor() {
    super();
    this.name = 'Dogfood';

    (function () {
      if (this) {
        console.log(this.name);
      } else {
        console.log('this is undefined.');
      }
    })();

    (() => {
      console.log(`${this.name} 'cause this is defined.`);
    })();
  }

  says() {
    return `Meow. My name is ${this.name}.`;
  }
}

export class Dog extends Animal {
  constructor(...spotColors) {
    super();
    this.name = 'Spot';
    this.colors = spotColors;
  }

  getSpotColors() {
    return this.colors.join(', ');
  }

  says() {
    return `Woof! My name is ${this.name}.`;
  }
}

export class Frog extends Animal {
  constructor(args) {
    super();
    let [a, , c] = args;
    console.log(a);
    console.log(c);
  }
}