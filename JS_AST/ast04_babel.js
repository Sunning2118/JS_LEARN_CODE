const generator = require("@babel/generator");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse");
const types = require("@babel/types");
function compile(code){
    const ast=parser.parse(code)
    traverse.default(ast, {})
    return generator.default(ast, {}, code)
}
const code = `
function getData() {
  console.log("data")
}
`;
const newCode = compile(code)
console.log(newCode)