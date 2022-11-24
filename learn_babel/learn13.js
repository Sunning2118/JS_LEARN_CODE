import * as babylon from "babylon";
import generate from "@babel/generator";
import * as t from "@babel/types";
import traverse from "@babel/traverse";


function test(babel) {
  const { types: t } = babel;
  return {
    visitor: {
      StringLiteral(path) { // 如果遇到一个字符串常数
        // 常数的内容是指定的字符串
        if (path.node.value === 'The answer to life, the universe and everything') {
          path.replaceWith(t.numericLiteral(42)) // 换成数字的 42
        }
      }
    }
  };
}

const code = `
function answer() {
  return 'The answer to life, the universe and everything'
}`
const ast = babylon.parse(code);
const new_ast = test(ast)
const output = generate.default(new_ast, {}, code);
console.log(output)


