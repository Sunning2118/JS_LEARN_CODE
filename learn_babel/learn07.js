// babylon
import * as babylon from "babylon";

const code = `function square(n) {
  return n * n;
}`;
let output = babylon.parse(code);
console.log(output, {
  sourceType: "module", // default: "script"
  plugins: ["jsx"] // default: []
})