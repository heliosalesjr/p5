function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);
  drawMandala();
}

function drawMandala() {
  for (let i = 0; i < 9; i++) {
    push();
    translate(width/2, height/2);
    rotate(TWO_PI * i / 9);
    fill(random(255), random(255), random(255));
    strokeWeight(i + 1);  // increase stroke weight for each layer
    if (i % 2 == 0) {  // alternate between different patterns
      stroke(random(255), random(255), random(255));  // red stroke
      drawPattern1();
    } else {
      stroke(random(255), random(255), random(255));  // blue stroke
      drawPattern2();
    }
    pop();
  }
}

function drawPattern1() {
  for (let i = 0; i < 8; i++) {
    push();
    rotate(TWO_PI / 8);
    drawFlower(0, 0, 80, 80, 5);  // double the size of the flowers
    pop();
  }
}

function drawPattern2() {
  for (let i = 0; i < 8; i++) {
    push();
    rotate(TWO_PI / 8);
    drawFlower(0, 0, 80, 80, 5);  // double the size of the flowers
    pop();
  }
}

function drawFlower(x, y, w, h, n) {
  beginShape();
  for (let i = 0; i < n; i++) {
    let angle = TWO_PI / n * i;
    let xx = x + w/2 + cos(angle) * w/2;
    let yy = y + h/2 + sin(angle) * h/2;
    vertex(xx, yy);
  }
  endShape(CLOSE);
}
