function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);
  //translate(width, height);
  spiralSquares(0, 0, 400, 0);

}

function spiralSquares(x, y, s, angle) {
  rect(x, y, s, s);

  if (s > 2) {
    push();
    translate(x + s/2, y + s/2);
    rotate(angle);
    spiralSquares(-(s/2) * 0.8, -(s/2) * 0.8, s * 0.8, angle + 0.05);
    pop();
  }
}