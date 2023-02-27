function setup() {
  createCanvas(400, 400);
  let bgGray = int(random(256)); // random gray background color
  background(bgGray);
  let cellSize = width / 10;
  let shapeColor = color(random(255), random(255), random(255)); // randomly assign shape color
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let x = j * cellSize;
      let y = i * cellSize;
      if (get(x, y)[0] !== bgGray) { // if not background color
        fill(shapeColor);
      } else {
        fill(get(x, y)); // use existing color (background color)
      }
      // draw shape randomly
      let shapeType = int(random(4));
      switch (shapeType) {
        case 0: // triangle
          triangle(x, y + cellSize, x + cellSize / 2, y, x + cellSize, y + cellSize);
          break;
        case 1: // circle
          ellipse(x + cellSize/2, y + cellSize/2, cellSize, cellSize);
          break;
        case 2: // horizontal stripes
          for (let k = 0; k < 4; k++) {
            rect(x, y + k * (cellSize / 4), cellSize, cellSize / 8);
          }
          break;
        case 3: // vertical stripes
          for (let k = 0; k < 4; k++) {
            rect(x + k * (cellSize / 4), y, cellSize / 8, cellSize);
          }
          break;
      }
    }
  }
  noLoop(); // only draw once
}