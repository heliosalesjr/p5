let yoff = 0;
let waveHeight = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  // Draw rainbow
  drawRainbow();

  // Check if mouse is over the canvas
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    // Animate waves
    waveHeight = map(mouseY, 0, height, 20, 200);
  }

  // Draw waves
  drawWaves();
}

function drawRainbow() {
  for (let i = 0; i < height; i++) {
    let rainbowColor = color(map(i, 0, height, 0, 360), 200, 200); // Set HSB color based on the vertical position
    stroke(rainbowColor);
    line(0, i, width, i);
  }
}

function drawWaves() {
  noFill();
  stroke(0);
  strokeWeight(2);

  beginShape();
  let xoff = 0;
  for (let x = 0; x <= width; x += 10) {
    let y = map(noise(xoff, yoff), 0, 1, height / 2 - waveHeight / 2, height / 2 + waveHeight / 2);
    vertex(x, y);
    xoff += 0.1;
  }
  endShape();

  yoff += 0.05;
}