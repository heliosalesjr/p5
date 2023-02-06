let rows = 10;
let columns = 10;
let squareSize;
let triangleColors = [];
let circlePositions = [];
let circleColors = [];

function setup() {
  createCanvas(400, 400);
  squareSize = width / columns;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      let index = x + y * columns;
      let randomColor = color(random(255), random(255), random(255));
      let randomChoice = random(100);
      if (randomChoice < 33) {
        triangleColors[index] = [color(255), color(255)];
      } else if (randomChoice < 66) {
        triangleColors[index] = [randomColor, randomColor];
      } else {
        triangleColors[index] = [color(255), randomColor];
      }
      if (random(100) < 15) {
        circlePositions.push([x * squareSize + squareSize / 2, y * squareSize + squareSize / 2]);
        circleColors.push(color(random(255), random(255), random(255)));
      }
    }
  }
}

function draw() {
  background(255);
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      let index = x + y * columns;
      fill(triangleColors[index][0]);
      triangle(x * squareSize, y * squareSize, x * squareSize + squareSize, y * squareSize, x * squareSize + squareSize, y * squareSize + squareSize);
      fill(triangleColors[index][1]);
      triangle(x * squareSize, y * squareSize, x * squareSize, y * squareSize + squareSize, x * squareSize + squareSize, y * squareSize);
    }
  }
  noStroke();
  //for (let i = 0; i < circlePositions.length; i++) {
    //fill(circleColors[i]);
    //let circleSize = squareSize;
    //ellipse(circlePositions[i][0], circlePositions[i][1], circleSize, circleSize);
  //}
}
