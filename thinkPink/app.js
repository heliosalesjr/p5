let grid;
const rows = 10;
const cols = 10;
const squareSize = 50;

function setup() {
  createCanvas(squareSize * cols, squareSize * rows);
  grid = createGrid(rows, cols);
}

function draw() {
  background(255);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      fill(grid[i][j]);
      rect(j * squareSize, i * squareSize, squareSize, squareSize);
    }
  }
}

function createGrid(rows, cols) {
  const grid = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      const rand = random(1);
      if (rand < 0.5) {
        row.push(color(200));
      } else {
        row.push(color(100));
      }
    }
    grid.push(row);
  }
  return grid;
}

function mouseMoved() {
  const i = floor(mouseY / squareSize);
  const j = floor(mouseX / squareSize);
  if (i >= 0 && i < rows && j >= 0 && j < cols) {
    grid[i][j] = color(255, 200, 200);
  }
  else {
    grid = createGrid(rows, cols);
  }
}
