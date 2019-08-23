var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color["Green"] = "bbb";
    Color["Blue"] = "ccc";
})(Color || (Color = {}));
var c = Color.Green;
var a = Color.Red;
console.log(c);
console.log(a);
//# sourceMappingURL=2-typs.js.map