let rows = 10;
let columns = 10;
let squareSize;
let triangleColors = [];
let circlePositions = [];
let circleColors = [];

// setup function to initialize the canvas and generate random colors for the squares and circles
function setup() {
  createCanvas(400, 400);
  // calculate the size of each square based on the number of rows and columns
  squareSize = width / columns;

  // loop through each row and column to generate random colors for each square and determine if it will have a circle
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      let index = x + y * columns;
      let randomColor = color(random(255), random(255), random(255));
      let randomChoice = random(100);

      // determine if the square will have two white triangles, two colored triangles, or one of each
      if (randomChoice < 33) {
        triangleColors[index] = [color(255), color(255)];
      } else if (randomChoice < 66) {
        triangleColors[index] = [randomColor, randomColor];
      } else {
        triangleColors[index] = [color(255), randomColor];
      }

      // determine if the square will have a circle with a random color
      if (random(100) < 15) {
        circlePositions.push([x * squareSize + squareSize / 2, y * squareSize + squareSize / 2]);
        circleColors.push(color(random(255), random(255), random(255)));
      }
    }
  }
}

// draw function to render the grid and colored triangles
function draw() {
  background(255);
  // loop through each row and column to draw the squares with colored triangles
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      let index = x + y * columns;
      fill(triangleColors[index][0]);
      triangle(x * squareSize, y * squareSize, x * squareSize + squareSize, y * squareSize, x * squareSize + squareSize, y * squareSize + squareSize);
      fill(triangleColors[index][1]);
      triangle(x * squareSize, y * squareSize, x * squareSize, y * squareSize + squareSize, x * squareSize + squareSize, y * squareSize);
    }
  }

  // loop through each circle to draw it with a random color
  noStroke();
  for (let i = 0; i < circlePositions.length; i++) {
    fill(circleColors[i]);
    let circleSize = squareSize * 0.3;
    ellipse(circlePositions[i][0], circlePositions[i][1], circleSize, circleSize);
  }
}
