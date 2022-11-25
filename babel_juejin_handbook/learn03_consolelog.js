import * as parser from '@babel/parser';
import * as types from '@babel/types'
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import template from 'babel-template';

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

const ast = parser.parse(sourceCode, {// 解析成AST树
  sourceType: 'unambiguous',
  plugins: ['jsx']
});

const targetCalleeName = ['log', 'info', 'error', 'debug'].map(item => `console.${item}`);
console.log(targetCalleeName)
// traverse.default(ast, {
//   CallExpression (path, state) {
//     if (path.node.isNew)
//     {  // 对于已经处理过的节点不再处理
//       return;
//     }
//     const calleeName = generate.default(path.node.callee).code; // callee下面就是MemberExpression也就是console.log()
//     if (targetCalleeName.includes(calleeName))
//     {
//       const { line, column } = path.node.loc.start;
//       const newNode = template.default.expression(`console.log("filename: (${line}, ${column})")`)();  // 新生成节点注意不再进行处理，赋值isNew标记

//       newNode.isNew = true;

//       if (path.findParent(path => path.isJSXElement()))
//       {
//         path.replaceWith(types.arrayExpression([newNode, path.node]))
//         path.skip();
//       } else
//       {
//         path.insertBefore(newNode);
//       }
//     }
//   }
// });
// const new_code = generate.default(ast).code;  // 根据ast来生成代码
// console.log(new_code);