// enum Color {Red, Green, Blue}
// let c: Color = Color.Green;
// enum Color {Red = 1, Green, Blue}
// let c: Color = Color.Green;
// enum Color {Red = 1, Green = 2, Blue = 4}
// let c: Color = Color.Green;

// enum Color {Red = 1, Green, Blue}
// let colorName: string = Color[2];

// console.log(colorName);  // 显示'Green'因为上面代码里它的值是2

function func(arg: string | null) {
  console.log(arg.length) // error
  console.log(arg!.length)
}
let a
func(a)