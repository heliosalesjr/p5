let grid = [];
let gridSize = 10;
let squareSize = 50;
let purpleCol, brownCol, lightGrayCol;

function setup() {
    createCanvas(500, 500);
    xisCol = color(random(0, 50), random(60, 100), random(50, 180), 255, 'HSL');
    purpleCol = color(random(0, 360), random(60, 100), random(40, 80), 255, 'HSL');
    brownCol = color(random(0, 360), random(60, 100), random(40, 80), 255, 'HSL');
    lightGrayCol = color(random(0, 360), random(60, 100), random(40, 80), 255, 'HSL');
    for (let i = 0; i < gridSize; i++) {
      grid[i] = [];
      for (let j = 0; j < gridSize; j++) {
        grid[i][j] = {
          color: xisCol,
          shape: random(["circle", "square", "outline-square"])
        }
      }
    }
}
  
function draw() {
    background(255);
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        fill(grid[i][j].color);
        rect(i * squareSize, j * squareSize, squareSize, squareSize);
        if (grid[i][j].shape === "circle") {
          fill(brownCol);
          ellipse(i * squareSize + squareSize / 2, j * squareSize + squareSize / 2, squareSize / 2);
        } else if (grid[i][j].shape === "square") {
          fill(lightGrayCol);
          rect(i * squareSize + squareSize / 4, j * squareSize + squareSize / 4, squareSize / 2, squareSize / 2);
        } else if (grid[i][j].shape === "outline-square") {
          strokeWeight(5);
          stroke(purpleCol);
          rect(i * squareSize + squareSize / 4, j * squareSize + squareSize / 4, squareSize / 2, squareSize / 2);
          noStroke();
        }
      }
    }
}