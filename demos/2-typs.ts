// enum Color {Red, B, Green="bbb", Blue="ccc", A}
// enum Color {Red, B, Green=4, Blue="ccc", A}
// enum Color {Red, B, Green=4, Blue=6, A}
enum Color {Red, B, Green='4', Blue=6, A}

let g: Color = Color.Green;
let a: Color = Color.A;
let b: Color = Color.B;
let bl: Color = Color.Blue;
let r: Color = Color.Red;

console.log(r)
console.log(b)
console.log(g)
console.log(bl)
console.log(a)
console.log(Color)

function infiniteLoop(): never {
  while (true) {
  }
}