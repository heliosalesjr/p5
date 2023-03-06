let gridSize = 20; // number of points in each row and column
let pointSize = 20; // diameter of each point
let blinkSize = 80; // distance at which neighboring points blink
let points = []; // array to store the points
let colors = []; // array to store the colors

function setup() {
  createCanvas(windowWidth, windowHeight);
  // create the points and colors arrays
  for (let i = 0; i < gridSize; i++) {
    points[i] = [];
    colors[i] = [];
    for (let j = 0; j < gridSize; j++) {
      points[i][j] = createVector(
        map(i, 0, gridSize - 1, pointSize, width - pointSize),
        map(j, 0, gridSize - 1, pointSize, height - pointSize)
      );
      colors[i][j] = color(random(255), random(255), random(255));
    }
  }
}

function draw() {
  background(0);
  // check if the mouse is on a point and make it blink
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let distToMouse = dist(mouseX, mouseY, points[i][j].x, points[i][j].y);
      if (distToMouse < pointSize/2) {
        // blink the current point
        fill(colors[i][j]);
        ellipse(points[i][j].x, points[i][j].y, pointSize + random(5));
        // blink the neighboring points
        for (let k = i-1; k <= i+1; k++) {
          for (let l = j-1; l <= j+1; l++) {
            if (k >= 0 && k < gridSize && l >= 0 && l < gridSize) {
              let distToBlink = dist(points[k][l].x, points[k][l].y, points[i][j].x, points[i][j].y);
              if (colorsMatch(colors[k][l], colors[i][j])) {                fill(colors[i][j]);
                ellipse(points[k][l].x, points[k][l].y, pointSize + random(5));
              }
            }
          }
        }
      } else {
        // draw the current point
        noFill();
        stroke(colors[i][j]);
        ellipse(points[i][j].x, points[i][j].y, pointSize);
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // recreate the points array based on the new window size
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      points[i][j] = createVector(
        map(i, 0, gridSize - 1, pointSize, width - pointSize),
        map(j, 0, gridSize - 1, pointSize, height - pointSize)
      );
    }
  }
}
function colorsMatch(c1, c2) {
  return (red(c1) === red(c2) && green(c1) === green(c2) && blue(c1) === blue(c2));
}



