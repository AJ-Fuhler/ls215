/*
abstraction: reduction
for each subarray:
  - add to total:
    - calculate length * width
*/

const totalArea = rectangles => {
  return rectangles.reduce((total, [ width, length ]) => total + (width * length), 0);
};

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

const totalSquareArea = rectangles => {
  const squares = rectangles.filter(([ width, length ]) => width === length);
  return totalArea(squares);
};

console.log(totalSquareArea(rectangles));