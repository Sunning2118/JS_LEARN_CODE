// export default function (babel) {
//   // plugin contents
// }
export default function ({ types: t }) {
  return {
    visitor: {
      Identifier(path, state) { },
      ASTNodeTypeHere(path, state) { }
    }
  };
};