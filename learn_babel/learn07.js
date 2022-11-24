// babylon
// import * as babylon from "babylon";
import * as parser from "@babel/parser";
const code = `function square(n) {
  return n * n;
}`;
let output = parser.parse(code);
console.log(output, {
  sourceType: "module", // default: "script"
  plugins: ["jsx"] // default: []
})