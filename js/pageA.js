import Vue from 'Vue';
import global from './common/global';

const Add = global.add;
const Person = global.Person;

//测试模块A的引入
var sum = Add(1,2,3,4,5);
console.log(sum);

//测试模块B的引入
var person = new Person('chaoluo',30);
var name = person.getName();
var age = person.getAge();
var sex = person.getSex();

var info = `${name}'age is ${sex} and his age is ${age} years old `;
console.log(info);

//测试Vue模块的引入
const view = new Vue({
    el : '#text',
    data : {
        name : '前端C罗'
    }
});