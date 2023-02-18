let n = 200;
let delta;
let factor;

function setup() {
  createCanvas(600, 600);
  delta = 2 * Math.PI / n;
}

function draw() {
  factor = 8 * mouseX / width;
  background(50);
  translate(width / 2, height / 2);
  stroke(30);
  strokeWeight(3);
  noFill();
  ellipse(0, 0, 400, 400);
  stroke(240);
  strokeWeight(5);
  for (let i = 0; i < n; i++) {
    point(200 * Math.cos(i * delta), 200 * Math.sin(i * delta));
    strokeWeight(1);
    line(
      200 * Math.cos(i * delta),
      200 * Math.sin(i * delta),
      200 * Math.cos(factor * i * delta),
      200 * Math.sin(factor * i * delta)
    );
  }
}