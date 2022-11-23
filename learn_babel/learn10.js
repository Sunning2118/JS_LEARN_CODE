import * as babylon from "babylon";
import generate from "@babel/generator";
const code = `function square(n) {
  return n * n;
}`;

const ast = babylon.parse(code);

const output = generate.default(ast, {}, code);
console.log(output)
// {
//   code: "...",
//   map: "..."
// }