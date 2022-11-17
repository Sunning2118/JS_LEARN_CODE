var color = "blue";
function changeColor() {
  let anotherColor = "red";
  function swapColors() {
    let tempColor = anotherColor;
    anotherColor = color;
    color = tempColor;
    // 这里可以访问 color、anotherColor 和 tempColor
  }
  // 这里可以访问 color 和 anotherColor，但访问不到 tempColor
  swapColors();
}
// 这里只能访问 color
changeColor();
