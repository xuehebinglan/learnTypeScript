var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hi, my name is " + this.name + ", I am " + this.age + " years old1");
    };
    return Person;
}());
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.prototype.greet = function () {
        console.log("Hi, my name is no one");
    };
    return Person2;
}());
var xiaom = new Person('xiaoming', 14);
var xiaoh = {
    name: 12,
    greet: function () {
        console.log("我是笑话");
    }
};
function GreetFn(obj) {
    obj.greet();
}
GreetFn(xiaom);
