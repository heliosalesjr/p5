
function setup() {
  createCanvas(800,800);

}

function draw() {
  background(0);
  stroke(255);
  noFill();
  drawCircle(mouseX, mouseY, height*.8);
}

function drawCircle(x, y, d) {
  ellipse(x, y, d);
  if (d > 1) {
    let newD = d * 0.8;
    drawCircle((width-x)*0.95, (height-y)*.95, newD);
  }
}