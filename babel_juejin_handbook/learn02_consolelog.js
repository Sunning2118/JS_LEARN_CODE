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


const targetCalleeName = ['log', 'info', 'error', 'debug'].map(item => {
  return `console.${item}`;
})
// console.log(targetCalleeName)


const ast = parser.parse(sourceCode, {  // 生成AST
  sourceType: 'unambiguous',  // 自动判断是script还是module
  plugins: ['jsx']
});


traverse.default(ast, {  // 对树进行遍历
  CallExpression (path, state) {  // 当遇到type为CallExpression的节点时
    // const calleeName = generate.default(path.node.callee).code;  // 取出MemberExpression的代码
    // const calleeName = path.get('callee').toString()
    const calleeName = (path.node.callee).toString()  // 其实这里不用自己调用 generate，path 有一个 toString 的 api，就是把 AST 打印成代码输出的。
    if (targetCalleeName.includes(calleeName))
    {  // 简化if的条件判断
      const { line, column } = path.node.loc.start;
      path.node.arguments.unshift(types.stringLiteral(`filename: (${line}, ${column})`))
    }
  }
});


const new_code = generate.default(ast).code;  // 根据ast来生成代码
console.log(new_code);
