let angle = 0;
let rotationSpeed = 0.01;

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(200);
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.7);
  box(200);
  angle += rotationSpeed;
}

function mouseMoved() {
  rotationSpeed = (mouseX - width / 2) * 0.0005;
}