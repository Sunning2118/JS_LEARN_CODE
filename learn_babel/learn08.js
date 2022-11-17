import parser from "@babel/parser";
import traverse from "@babel/traverse";
import * as t from "@babel/types";
import generate from "@babel/generator";
import template from "@babel/template";

const code = `function square(n) {
  return n * n;
}`;

const ast = parser.parse(code);

// traverse.default(ast, {
//   enter(path) {
//     if (
//       path.node.type === "Identifier" &&
//       path.node.name === "n"
//     ) {
//       path.node.name = "x";
//     }
//   }
// });
traverse.default(ast, {
  enter(path) { // path是路径
    if (t.isIdentifier(path.node, { name: "n" })) {
      path.node.name = "x";
    }
  }
});
const new_code = generate.default(ast, {}, code);
console.log(new_code)