let colors = ['#FF6B6B', '#FFE66D', '#2EC4B6', '#011627'];
let minSize = 10;
let maxSize = 150;
let minBranches = 2;
let maxBranches = 6;
let minAngle = 0;
let maxAngle = 180;
let maxDepth = 8;

let radius = 0;
let centerX, centerY;

function setup() {
  createCanvas(800, 800);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(1);

  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  background(255);

  // Draw the circle that will contain the fractal pattern
  fill(255);
  stroke(0);
  strokeWeight(4);
  ellipse(centerX, centerY, radius * 2);

  // Set up the initial parameters for the fractal pattern
  let x = centerX + cos(radians(0)) * radius;
  let y = centerY + sin(radians(0)) * radius;
  let size = random(minSize, maxSize);
  let branches = int(random(minBranches, maxBranches));
  let angle = random(minAngle, maxAngle);

  // Draw the fractal pattern
  drawFractalEllipse(x, y, size, branches, angle, 0);

  // Increase the radius of the circle for the next frame
  radius += 10;
  if (radius >= min(width, height) / 2) {
    noLoop();
  }
}

function drawFractalEllipse(x, y, size, branches, angle, depth) {
  // Set the fill color based on the depth of recursion
  let c = lerpColor(color(random(colors)), color(255), depth / maxDepth);
  fill(c);

  // Draw the current ellipse
  ellipse(x, y, size, size);

  // Recursively draw ellipses for each branch
  if (depth < maxDepth) {
    for (let i = 0; i < branches; i++) {
      let newX = x + cos(radians(angle + i * 360 / branches)) * size;
      let newY = y + sin(radians(angle + i * 360 / branches)) * size;
      let newSize = size * random(0.5, 0.8);
      let newBranches = int(random(minBranches, maxBranches));
      let newAngle = angle + random(-30, 30);
      drawFractalEllipse(newX, newY, newSize, newBranches, newAngle, depth + 1);
    }
  }
}