import * as parser from '@babel/parser';
import * as types from '@babel/types'
import traverse from '@babel/traverse';
import generate from '@babel/generator';

const sourceCode = `
  console.log(1);

  function func() {
      console.info(2);
  }

  export default class Clazz {
      say() {
          console.debug(3);
      }
      render() {
          return <div>{console.error(4)}</div>
      }
  }
`;


// 解析parse
const ast = parser.parse(sourceCode, {  // 生成AST
  sourceType: 'unambiguous',  // 自动判断是script还是module
  plugins: ['jsx']
});


// 转换transform
traverse.default(ast, {  // 对树进行遍历
  CallExpression(path, state) {  // 当遇到type为CallExpression的节点时
    if (types.isMemberExpression(path.node.callee) // CallExpression的callee属性是一个MemberExpression属性的节点
      && path.node.callee.object.name === 'console'  // object.name
      && ['log', 'info', 'error', 'debug'].includes(path.node.callee.property.name)) { // property.name
      const { line, column } = path.node.loc.start;
      // console.log(`object.name:console-----property.name:${path.node.callee.property.name}-----${line}-----${column}`)
      path.node.arguments.unshift(types.stringLiteral(`filename: (${line}, ${column})`))
    }
  }
});


// 生成generate
const new_code = generate.default(ast).code;  // 根据ast来生成代码
console.log(new_code);
