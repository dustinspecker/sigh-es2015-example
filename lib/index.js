import {Cat, Dog, Frog} from './animals';

let cat = new Cat();
let dog = new Dog('red', 'brown', 'black');
let frog = new Frog(['ribbit', 'croak', 'eat fly']);

console.log(cat.says());
console.log(dog.says());
console.log(dog.getSpotColors());
console.log(frog.says());

let test = 'exam';
let o = {
  name: 'o',
  test,
  doSomething() {
    console.log('I did.');
  }
};

console.log(o.name);
console.log(o.test);
o.doSomething();