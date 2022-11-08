const generator = require("@babel/generator");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse");
const { tsExternalModuleReference } = require("@babel/types");
const types = require("@babel/types");
function compile(code) {
  const ast = parser.parse(code)  // 生成抽象语法树
  traverse.default(ast, {})  // 遍历转换代码
  return generator.default(ast, {}, code)  // generator将AST转会成代码
}
const code = `
function getData() {
  console.log("data")
}
`;
const newCode = compile(code)
console.log(newCode);
