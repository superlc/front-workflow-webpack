class Person{
    constructor(name,age = 0 , sex = 'male'){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getSex(){
        return this.sex;
    }
}

export default Person;