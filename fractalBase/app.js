function setup() {

  createCanvas(800,800);
}

function draw() {

  background(0);
  stroke(255);
  noFill();
  drawCircle(400,400,400);
  noLoop();

}

function drawCircle(x, y, d) {
  ellipse(x, y, d);
  if (d > 5) {

      let newD = d *0.25;
      drawCircle(x+newD + 10, y, newD);
      drawCircle(x-newD - 10, y, newD);
      drawCircle(x, y-newD - 50, newD);
      //drawCircle(x, y+d*0.5, d*0.5);

  }
}
