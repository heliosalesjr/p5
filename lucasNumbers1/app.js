let prev = 1;
let curr = 3;

function setup() {
  createCanvas(800, 800);
  frameRate(2);
}

function draw() {
  background(220);
  stroke(0);
  noFill();
  rect(10, 10, width - 20, height - 20);

  let next = prev + curr;

  let angle = map(next, 2, 21, 0, TWO_PI);

  let x = width / 2 + (width / 4) * cos(angle);
  let y = height / 2 + (height / 4) * sin(angle);

  let size = map(curr, 2, 21, 10, 100);

  fill(255, 0, 0);
  ellipse(x, y, size, size);

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(size / 2);
  text(curr, x, y);

  prev = curr;
  curr = next;
}