import Add from 'moduleA';
import Person from 'moduleB';

var sum = Add(1,2,3,4,5);
console.log(sum);

var person = new Person('chaoluo',30);
var name = person.getName();
var age = person.getAge();
var sex = person.getSex();

var info = `${name}'age is ${sex} and his age is ${age} years old `;
console.log(info);

var input = document.querySelector('#input');

console.log(input.value);

console.log('hello,world');