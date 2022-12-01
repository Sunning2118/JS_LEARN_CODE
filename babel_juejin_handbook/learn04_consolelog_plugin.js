// 封装成插件的形式
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const types = require('@babel/types');
const template = require('@babel/template').default;



const targetCalleeName = ['log', 'info', 'error', 'debug'].map(item => `console.${item}`);

module.exports = function ({ types, template }) {
  return {
    visitor: {
      CallExpression (path, state) {
        if (path.node.isNew)
        {  // 对于已经处理过的节点不再处理
          return;
        }
        const calleeName = generate(path.node.callee).code; // callee下面就是MemberExpression也就是console.log()
        if (targetCalleeName.includes(calleeName))
        {
          const { line, column } = path.node.loc.start;
          const newNode = template.expression(`console.log("filename: (${line}, ${column})")`)();// 创建新节点
          // 新生成节点注意不再进行处理，赋值isNew标记
          newNode.isNew = true;

          if (path.findParent(path => path.isJSXElement()))  // 向上查找是否有JSXElement类型的节点，其中是回调函数
          {
            path.replaceWith(types.arrayExpression([newNode, path.node]))
            path.skip();
          } else  // 没有JSX的情况
          {
            path.insertBefore(newNode);
          }
        }
      }
    }
  }
}