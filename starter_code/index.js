/*jshint esversion: 6*/
const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
let James = new Person("James", 1, 2);
let Pepe = new Person("Pepe", 2, 5);
let Juan = new Person("Juan", 3, 4);
elevator.call(James);
elevator.call(Pepe);
elevator.call(Juan);

elevator.start();
