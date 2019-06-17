function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User", aaa: 'ddd' };
document.body.innerHTML = greeter(user);
