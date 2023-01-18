function setup() {
  createCanvas(400, 400);
  background(200);
}

function draw() {
  noStroke();
  fill(random(255), random(255), random(255));
  ellipse(random(width), random(height), random(50, 100), random(50, 100));
  fill(random(255), random(255), random(255));
  triangle(random(width), random(height), random(width), random(height), random(width), random(height));
  fill(random(255), random(255), random(255));
  ellipse(random(width), random(height), random(50, 100), random(50, 100));
  fill(random(255), random(255), random(255));
  triangle(random(width), random(height), random(width), random(height), random(width), random(height));
}