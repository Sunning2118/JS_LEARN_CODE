import * as parser from '@babel/parser';
import * as types from '@babel/types'
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import template from '@babel/template';

const sourceCode = `
  console.log(1);

  function func() {
      console.info(2);
  }

  export default class Clazz {
      say() {
          console.adebug(3);
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

traverse.default(ast, {
  CallExpression (path, state) {
    // console.log(path.findParent(path => path.isJSXElement()))
    // const calleeName = generate.default(path.parent).code;
    // console.log(calleeName)
    console.log(path.toString())
  }
});

// const new_code = generate.default(ast).code;  // 根据ast来生成代码
// console.log(new_code);