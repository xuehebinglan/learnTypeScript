class Person {
  name: string;
  age: number;
  constructor (name: string, age: number) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log(`Hi, my name is ${this.name}, I am ${this.age} years old1`)
  }
}

class Person2{
  greet() {
    console.log(`Hi, my name is no one`)
  }
}


let xiaom = new Person('xiaoming', 14)

let xiaoh = {
  name: 12,
  greet: function () {
    console.log("我是笑话")
  }
}


interface greetable {
  greet: Function
}

function GreetFn(obj: Person2) {
  obj.greet()
}

GreetFn(xiaom)
