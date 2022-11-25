import * as types from "@babel/types";
import * as explode from "@babel/helper-explode-assignable-expression"

const operator = '**';


const mathPowExpression = types.callExpression(  // Math.pow(left, right)
  types.memberExpression(types.identifier("Math"), types.identifier("pow")),
  [left, right],
);


const assignMathPowExpression = types.assignmentExpression(// _a=Math.pow(left, right)
  "=", types.identifier("_a"), mathPowExpression
);



const getmathPowExpression = (left, right) => {
  return types.callExpression(  // Math.pow(left, right)
    types.memberExpression(types.identifier("Math"), types.identifier("pow")),
    [left, right],
  );
}




export default function () {
  return {  // 返回一个对象
    name: 'babel-plugin-exponentiation-opertor',
    visitor: {
      AssignmentExpression(path) {
        const { node, scope } = path;
        if (node.operator === `${operator}=`) {  // 只处理 **=
          const nodes = [];
          const exploded = explode(node.left, nodes, this, scope);
          nodes.push(
            types.assignmentExpression(
              "=",
              exploded.ref,
              getmathPowExpression(exploded.uid, node.right),
            ),
          );
          path.replaceWith(mathPowExpression)
        }
      },
      BinaryExpression(path) {// 只处理a**b
        const { node } = path;
        if (node.operator === operator) {
          path.replaceWith(getmathPowExpression(node.left, node.right));
        }
      },
    }
  };
}
