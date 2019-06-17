> This Project is for learning TypeScript.
> https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html

- `tsc demo1/greeter.ts`

## 接口

```
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", s: "User", aaa: 'ddd' };

document.body.innerHTML = greeter(user);
```
- 已上代码会报错，因为没有'lastName'
- `let user = { firstName: "Jane", lastName: "User", aaa: 'ddd' };`
- 这样就不报错