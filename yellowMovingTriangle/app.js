let points = [];
let angle = [];
let a = [];
let b = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 5; i++) {
    points[i] = createVector(0, 0);
    angle[i] = random(TWO_PI);
    a[i] = random(100, 200);
    b[i] = random(50, 150);
  }
}

function draw() {
  background(255);

  for (let i = 0; i < 5; i++) {
    angle[i] += random(-0.1, 0.1);
    points[i].x = width / 2 + cos(angle[i]) * a[i];
    points[i].y = height / 2 + sin(angle[i]) * b[i];
  }

  fill(255, 255, 0);
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);

  for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 5; j++) {
      line(points[i].x, points[i].y, points[j].x, points[j].y);
    }
  }
}