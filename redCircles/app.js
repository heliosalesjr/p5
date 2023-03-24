let circles = [];
let redIndex = 0; // start with the first circle
let timeToRed = 1000; // start with the first circle

function setup() {
  createCanvas(600, 600);
  noFill();
  generateCircles(27);
}

function draw() {
  background(220);
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    if (circle.isRed) {
      fill(255, 0, 0, 80);
    } else {
      noFill();
    }
    ellipse(circle.x, circle.y, circle.diameter);
  }

  if (timeToRed > 0) {
    timeToRed -= deltaTime;
    if (timeToRed <= 0) {
      circles[redIndex].isRed = true;
      redIndex++;
      if (redIndex >= circles.length) {
        redIndex = 0;
      }
      timeToRed = 1000;
    }
  }
}

function generateCircles(numCircles) {
  for (let i = 0; i < numCircles; i++) {
    let diameter = random(50, 150);
    let x = random(diameter / 2, width - diameter / 2);
    let y = random(diameter / 2, height - diameter / 2);
    circles.push({ x, y, diameter, isRed: false });
  }
}
